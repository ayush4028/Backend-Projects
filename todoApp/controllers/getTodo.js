// All the controllers part of the find statement of the TODO list

// import the model
const Todo = require("../models/Todo");

// define route handler 

exports.getTodo = async(req, res) => {
    try{
        // fetch all Todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            sucess: true,
            data: todos,
            message: "Entire todo data is fetched",
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error: err.message,
            message: 'Server Error',
        })
    }
}

exports.getTodoByID = async(req,res) => {
    try{
        // extract todo items on the basis of Id
         const id = req.params.id;
         const todo = await Todo.findById({_id: id})

        // We are taking a condition that data from Todo not found
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "No Data is found from the given Id",
            })
        } 
        // data for given id found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data succesfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error: err.message,
            message: 'Server Error',
        })
    }
}