const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const Todo = require("../model/Todo")



exports.protected = asyncHandler(async (req, res, next) => {

    const token = req.cookies.token
    // console.log("adminprotected", req.body);
    if (!token) {
        return res.status(401).json({
            message: "Please Provide Token"
        })
    }
    // const { id } = jwt.verify(token, process.env.JWT_KEY)
    const [, tk] = token.split(" ")
    const { id } = jwt.verify(tk, process.env.JWT_KEY)
    if (!id) {
        return res.json({
            message: "Invalid token"
        })
    }
    const result = await Todo.findById(id)
    if (!result) {
        return res.status(401).json({
            message: "Can Not find this user"
        })
    }
    req.body.employeeId = id
    next()
})
