import mongoose from "mongoose"


const likeSchema = mongoose.Schema({
    farmer : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'farmer',
        required: true
    },
    merchant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'merchant',
        required: true
    }
})

const likeModel = mongoose.model("like", likeSchema)

export default likeModel