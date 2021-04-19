const express = require('express');

const app = express();

app.use(express.json());


let student_list = [];  // students list to store students details
let student_id = 1000; // ID to be assigned to students starting from 1000
let mentor_list = [];  // mentor list to store mentor details
let mentor_id = 1; // ID to be assigned to mentors starting from 1


// api to create student
app.post("/create_student",(req,res)=>{

    let data = req.body;
    data["id"] = student_id;
    data["assigned_mentor_id"] = "";
    student_list.push(data);
    student_id += 1;
    
    res.status(200).send("student created");

});

// api to create mentor
app.post("/create_mentor",(req,res)=>{

    let data = req.body;
    data["id"] = mentor_id;
    data["assigned_students"] = [];
    mentor_list.push(data);
    mentor_id += 1;
   
    res.status(200).send("Mentor created");

});

// api to assign multiple students to a mentor
app.put("/assign_mentor/:sid/:mid",(req,res)=>{

    let sid = req.params.sid;
    let mid = req.params.mid;
    mentor_list.map((mentor)=>{
        if(mentor["id"] == mid){
            mentor["assigned_students"].push(+sid);
        }
    });
    student_list.map((student)=>{
        if(student["id"]==sid){
            student["assigned_mentor_id"] = mid ;
        }
    });

    res.status(200).send("mentor assigned");


})

//api to assign mentor to particular student
app.put("/assign_student/:id",(req,res)=>{
    
    let list = req.body.students;
    let id = req.params.id;
    mentor_list.map((mentor)=>{
        if(mentor["id"] == id){
            mentor["assigned_students"].push(...list);
        }
    });
    student_list.map((student)=>{
        if(list.includes(student.id)){
            student["assigned_mentor_id"] = id ;
        }
    });

    res.status(200).send("Students Assigned to mentor");

});

// api to display all students assigned to a particular mentor
app.get("/show_students/:id",(req,res)=>{
    let id = req.params.id;
    let students;
    mentor_list.map((mentor)=>{
        if(mentor.id == id){
            students =  mentor["assigned_students"];
        }
    });

    let details = [];
    student_list.map((student)=>{
        if(students.includes(student.id)){
            details.push(student);
        }
    });
    res.status(200).send(details);
});

// api to get all mentors
app.get("/show_mentors",(req,res)=>{
    res.status(200).send(mentor_list);
})


app.listen( process.env.PORT || 4000,()=>{
    console.log("Server running");
});

