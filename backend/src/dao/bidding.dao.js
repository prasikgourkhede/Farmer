import biddingModel from "../model/bidding.model";




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

export async function findOneDeleteBidding(query){
    const {auction_id, buyer_id, currentAmount, finalAmount} = query
    const bidding = await biddingModel.findOneAndDelete({
        auction_id,
        buyer_id,
        currentAmount,
        finalAmount,
        status: "ACTIVE"
    })
    return bidding
}