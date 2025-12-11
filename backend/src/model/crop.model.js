import mongoose from "mongoose";



const cropSchema = mongoose.Schema({
    image: {
        type: String,
        // required: true,
    },
    cropName:{
        type : String,
        trim : true
    },
    contactNo: {
        type: Number,
        required: true,
        trim: true
    },
    mentions:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'buyers'
    }
})

const cropModel = mongoose.model("crops", cropSchema)

export default cropModel