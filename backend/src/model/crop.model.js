import mongoose from "mongoose";



const cropSchema = mongoose.Schema({
    image: {
        type: String,
        // required: true,
    },
    contactNo: {
        type: Number,
        required: true,
        trim: true
    },
    farmers: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'farmers'
    },
    mentions:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'buyers'
    }
})

const cropModel = mongoose.model("crops", cropSchema)

export default cropModel