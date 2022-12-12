const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require("cors");
const bodyParser=require("body-parser");

app.use(cors());
app.use(bodyParser.json());


//importing functions
const {createNewTask,readTask,deleteTask,updateTask,updateStatus}=require("./src/controllers/functions.js")

/////mongooose connection
mongoose.connect("mongodb://localhost:27017/Todo-list");
mongoose.connection.on("connected",()=>{
    console.log("DB Connected");
})

app.post("/create-new-task",createNewTask);
app.get("/get-task",readTask);
app.delete("/delete-task",deleteTask);
app.put("/update-task",updateTask);
app.put("/update-status",updateStatus)





app.listen(2000,()=>{
    console.log("server started");
})