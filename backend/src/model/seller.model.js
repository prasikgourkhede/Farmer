import mongoose from "mongoose";


const farmerSchema = mongoose.Schema({
    username:{
        type: String,
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

const farmerModel = mongoose.model("Farmer", farmerSchema)

export default farmerModel