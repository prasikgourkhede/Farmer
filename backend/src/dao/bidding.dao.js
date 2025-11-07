import auctionModel from "../model/auction.model.js";
import biddingModel from "../model/bidding.model.js";




export async function createBidding(data){
    const {auction_id, buyer_id, currentAmount, finalAmount} = data
    const bidding = await biddingModel.create({
        auction_id,
        buyer_id,
        currentAmount,
        finalAmount
    })
    return bidding
}

export async function findOneBidding(query){
    const {auction_id, buyer_id, currentAmount, finalAmount} = query
    const bidding = await biddingModel.findOne({
        auction_id,
        buyer_id,
        currentAmount,
        finalAmount
    })
    return bidding
}

export async function closeBidding(query){
    const {auction_id, buyer_id, currentAmount, finalAmount} = query
    const bidding = await biddingModel.findOne({
        auction_id,
        buyer_id,
        currentAmount,
        finalAmount
    })
    // highestBid = bidding.sort({currentAmount: -1})
    // .sort({currentAmount: -1})
    // .limit(1)
    // if(!highestBid){
    //     return { message: "No bids placed for this auction" };
    // }
    return bidding
}

export async function findOneAndUpdateBidding(query){
    const {auction_id, winner, currentAmount, finalAmount} = query
    const auction = await auctionModel.findByIdAndUpdate(
        auction_id,
        {
          finalAmount: highestBid.currentAmount,
          winner: highestBid.buyer_id,
          status: "CLOSED",
        },

        { new: true }
      );
    
      return auction;
    }