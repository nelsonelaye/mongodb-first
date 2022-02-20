const express = require("express")
const route = express.Router()
const {postUser, getAllUser, getById } = require("../Controller/controller")


//route to create new data
route.post("/post", postUser)

//route to get all datas
route.get("/get", getAllUser)

//route to get only one document based on the id
route.get("/:id", getById )

module.exports = route 