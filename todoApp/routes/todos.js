const express = require("express");
const router = express.Router();

//import controller 
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoByID} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updatetodo")
const {deleteTodo} = require("../controllers/deleteTodo")

// define API routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoByID);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;