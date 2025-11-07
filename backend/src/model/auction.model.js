import mongoose from "mongoose"



const auctionSchema = mongoose.Schema({
    cropName: {
        type: String,
        trim: true,
        // required: true
    },
    cropImage: {
        type: String,
        trim: true,
        // required: true
    },
    farmer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "farmers",
        // required: true,
        trim: true
    },
    buyer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "buyers",
        // required: true,
        trim: true
    },
    merchant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "merchants",
        // required: true,
        trim: true
    },
    basePrice: {
        type: Number,
        // required: true,
        trim: true
    },
    currentAmount: {
        type: Number,
        // required: true,
        trim: true
    },
    finalPrice: {
        type: Number,
        // required: true,
        trim: true
    },
    status: { 
        type: String, 
        enum: ["ACTIVE", "CLOSED"], 
        default: "ACTIVE" },

})

const auctionModel = mongoose.model("auctions", auctionSchema)

export default auctionModel