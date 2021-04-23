const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const cors = require("cors");

let env  = require('dotenv');
env.config();
const app = express();
const objectId = mongodb.ObjectID;
const mongoClient = mongodb.MongoClient;


const dburl = process.env.DB_URL;
const port = process.env.PORT || 4000;

app.use(express.json());
var corsOptions = {
    origin: ['http://localhost:3000','https://607fde03a168c9b43cc8cddd--cranky-euler-7f9e3c.netlify.app'],
    credentials: true,
};
app.use(cors(corsOptions));


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'raishwarya344@gmail.com',
    pass: 'aishugrr'
  },
  tls: {
    rejectUnauthorized: false
    }
});

app.get("/",(req,res)=>{
    res.send("App working");
})

app.post("/register",async(req,res) =>{
  let client;
  try{
    client = await mongoClient.connect(dburl);
    let db = client.db("LoginRegister");
    let found = await db.collection("users").findOne({email : req.body.email});

    if(found){
      res.status(200).json({message :"User already exists. Try again with different email"});
    }
    else{
      let salt = await bcrypt.genSalt(10);
      let hash = await bcrypt.hash(req.body.password,salt);
      req.body.password = hash;
      await db.collection("users").insertOne(req.body);
      var mailOptions = {
        from: 'raishwarya344@gmail.com',
        to: req.body.email,
        subject: 'Registration successfull',
        text: 'You have successfully registered to the demo app'
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.status(200).json({message :"User registered"});

    }
   
  }
  catch(error){
    console.log(error);
  }
  client.close()
})


app.post("/login",async(req,res) =>{
  let client;
  try{
    client = await mongoClient.connect(dburl);
    let db = client.db("LoginRegister");
    let data = await db.collection("users").findOne({email : req.body.email});
    
    if(data){
      let isValid = await bcrypt.compare(req.body.password, data.password);
      if(isValid){
        
        res.status(200).json( {message : "Login Successful"});
        var mailOptions = {
            from: 'demo@gmail.com',
            to: req.body.email,
            subject: 'Login successful',
            text: 'You have successfully logged in to the demo app'
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

      }else{
        res.status(200).json({message : "Login Unsuccessful. Invalid Email/Password"});
      }
    
    }
    else{
      res.status(200).json({message :"User is not registered"});
    }
  }
  catch(error){
    console.log(error);
  }
  client.close()
})






app.listen(port,()=>{
  console.log("server is running with port: ",port);
})





