import mongoose from "mongoose";




const likeSchema = mongoose.Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller'
    },
    merchantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Merchant'
    },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer'
    }
})

const likeModel = mongoose.model('Like', likeSchema)

export default likeModel