// All the controller part of the creater TODO list

// import the model
const Todo = require("../models/Todo");

// define route handler 

exports.createTodo = async(req, res) => {
    try{
        // extract title and description from request ki body
        const {title, description} = req.body;
        
        // create a new Todo object and insert it in db 
        const response = await Todo.create({title, description});

        // send a json response with success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry Created Successfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success: false,
            data: "Internal server error",
            message: err.message,
        })
    }
}