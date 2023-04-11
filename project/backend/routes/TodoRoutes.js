const { getAllTodo, AddAllTodo, deleteTodo, updateTodo } = require("../controllers/TodoController")
const router = require("express").Router()

router
    .get("/", getAllTodo)
    .post("/add", AddAllTodo)
    .put("/update/:TodoID", updateTodo)
    .delete("/:TodoID", deleteTodo)

module.exports = router 