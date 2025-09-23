import mongoose from "mongoose";



const plantSchema = mongoose.Schema({
    image:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller'
    }
})

const plantModel = mongoose.model("Plant", plantSchema)

export default plantModel