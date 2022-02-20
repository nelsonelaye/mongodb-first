const express = require("express")
const mongoose = require("mongoose")
const port = 2025
const app = express()
const route = require("./Router/route")
const url = "mongodb://localhost/set05"

//connect our application to our database
mongoose.connect(url).then(()=> {
    console.log("Database connected successfully");
}).catch((error) => {
    console.log(error.message);
})

app.use(express.json())
app.use("/api", route)
// app.get("/", (req, res) => {
//     res.status(200).json({message: "Express and Mongooose running wild"})
// })

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})