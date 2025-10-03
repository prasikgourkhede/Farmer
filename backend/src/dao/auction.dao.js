import auctionModel from "../model/auction.model.js"





export async function createAuction(data){
    const {cropName,cropImage,farmer_id,buyer_id,merchant_id,basePrice,currentAmount,finalPrice} = data
    return await  auctionModel.create({
        cropName,
        cropImage,
        farmer_id,
        buyer_id,
        merchant_id,
        basePrice,
        currentAmount,
        finalPrice
    })
}

export async function findAuction(query){
    const {cropName,cropImage,farmer_id,buyer_id,merchant_id,basePrice,currentAmount,finalPrice} = query
    return await auctionModel.find({
        cropName,
        cropImage,
        farmer_id,
        buyer_id,
        merchant_id,
        basePrice,
        currentAmount,
        finalPrice
    })
}

export async function findOneAuction(query){
    const {cropName,cropImage,farmer_id,buyer_id,merchant_id,basePrice,currentAmount,finalPrice} = query
    return await auctionModel.findOne({
        cropName,
        cropImage,
        farmer_id,
        buyer_id,
        merchant_id,
        basePrice,
        currentAmount,
        finalPrice
    })
}
