import mongoose from "mongoose"



const biddingSchema = mongoose.Schema({
    auction_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "auctions",
        required: true
    },
    buyer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "buyers",
        required: true
    },
    currentAmount: {
        type: Number,
        required: true
    },
    finalAmount:{
        type: Number,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["ACTIVE", "CLOSED"],
        default: "ACTIVE"
    }
})

const biddingModel = mongoose.model("AuctionBidding", biddingSchema)

export default biddingModel