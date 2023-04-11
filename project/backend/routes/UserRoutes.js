const { getUser, UserRegister, loginUser } = require("../controllers/UserController")

const router = require("express").Router()

router
    .get("/", getUser)
    .post("/register", UserRegister)
    .post("/login", loginUser)

module.exports = router 