const express = require("express")
const app = express()
const cors = require("cors")
const connectDB = require("./config/db")
require("dotenv").config({ path: "./.env" })
connectDB()

app.use(express.json())
app.use(express.static("public"))
app.use(cors())
app.use("/todo", require("./routes/TodoRoutes"))
app.use("/user", require("./routes/UserRoutes"))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running http://localhost:${PORT}`)) 