const userModel = require("../Model/model")


//function to create new data
const postUser = async (req, res) => {
    try {
        const newUser = await userModel.create({
            fullName: req.body.fullName,
            course: req.body.course,
            age: req.body.age
        })
    
        res.status(201).json({
            message: "Document created successfuly",
            data: newUser
        })
    }catch(err) {
        res.status(404).json({message: err.message})
    }
    
}

//function to get all data
const getAllUser = async (req, res) => {
    try {

        const allDocuments = await userModel.find()
        res.status(200).json({
            message: "Collections found",
            data: allDocuments
        })
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//function to get document by ID
const getById = async (req,res) => {
    try {
        // const id = 
        const idDocument = await userModel.findById(req.params.id)

        if(!idDocument) {
            res.status(401).json({message:"Document not found"})
        } else{
            res.status(200).json({
                message: "Document with that id ha sbeen found",
                data: idDocument
            })
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


module.exports = {
    postUser, 
    getAllUser,
    getById 
}