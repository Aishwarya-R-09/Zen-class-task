const fs = require("fs");
const express = require("express");

const app=express();
app.use('/images', express.static('images')); 

app.get("/",(req,res) => {
    var result="";
    result +="<h2>Files and Folders</h2><hr><br>"
    fs.readdir("C:/",(err,files) =>{
        files.map((names) =>{
            let a=names.split(".");
            if(a[1]==undefined){
                result += "<img src='./images/folder-icon.jpg' height='30px' width='30px'>"
                result += "<span>  "+names+"</span><br><br><br>";
            }
            else{
                result += "<img src='./images/file-icon.png' height='30px' width='30px'>"
                result += "<span>  "+names+"</span><br><br><br>"; 
            }
        })
        res.send(result);
    })
})

app.listen(4000,() =>{
    console.log("Server Running")
});