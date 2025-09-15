import mongoose from "mongoose";

const auctionSchema = mongoose.Schema({
    cropName:{
        type: String,
        required: true,
        trim: true
    },
    image:{
        type:String,
        trim:true
    },
    buyer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'buyers',
        required:true,
        trim: true
    },
    farmer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'farmers',
        trim: true,
        required: true
    }
})

const auctionModel = mongoose.model('auctions', auctionSchema)

export default auctionModel