import mongoose from "mongoose";


const buyerSchema = mongoose.Schema({
    image:{
        type: String,
        required: true,
        trim: true,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzwKn9OLJK-HYY0fCCMiqwA7Pn1Pr5AW66g&s"
    },
    username:{
        type: String,
        required: true,
        unique: true ,
        trim: true
    },
    contactNo:{
        type: Number,
        required: true,
        unique: true ,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true ,
        trim: true
    },
    password:{
        type: String,
        required: true,
    }
})

const buyerModel = mongoose.model("Buyer", buyerSchema)

export default buyerModel