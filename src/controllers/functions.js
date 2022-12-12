
const {Todo}=require("../Model/model");

const createNewTask=async(request,response)=>{
    await Todo.create(request.body);
    return response.json({data:"Task created"});

}

const readTask=async(request,response)=>{
    const id=request.query.id;
    if(id){
        var tasks=await Todo.findById(id);
    }
    else{
        var tasks=await Todo.find();
    }
    return response.json(tasks);

}

const deleteTask=async(request,response)=>{
    const id=request.query.id;
    await Todo.findByIdAndDelete(id);
    return response.json({data:"Task deleted"})
}

const updateTask=async(request,response)=>{
    const id=request.query.id;
    await Todo.findByIdAndUpdate(id,request.body);
    return response.json({data:"Task Updated"})
}

const updateStatus=async(request,response)=>{
    const id=request.query.id;
    await Todo.findByIdAndUpdate(id,request.body);
    return response.json({data:"Status Updated"})

}

module.exports={createNewTask,readTask,deleteTask,updateTask,updateStatus};