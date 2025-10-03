import closeAuctionModel from "../model/closeAuction.model.js"

export async function closeAuction(auction_id) {
    return await closeAuctionModel.findByIdAndUpdate(auction_id, {status: "CLOSED"});
}
