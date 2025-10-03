import mongoose from "mongoose";


const closeAuctionSchema = new mongoose.Schema({
    cropName: {
        type: String,
        required: true,
    },
    biddingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bidding",
        required: true,
    },
    finalPrice: {
        type: mongoose.Schema.Types.Number,
        ref: "Bidding",
        required: true,
    },
    winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bidding",
    },
});

const closeAuctionModel = mongoose.model("AuctionClose", closeAuctionSchema);
export default closeAuctionModel;
