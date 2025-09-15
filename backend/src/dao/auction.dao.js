import auctionModel from "../model/auction.model.js";




export function auctionRegister(data){
    const {cropName,image,buyers,farmers} = data
    return auctionModel.create({
        cropName,
        image,
        buyers,
        farmers
    })
}