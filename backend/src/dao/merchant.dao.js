import merchantModel from "../model/merchant.model.js";




export async function createMerchant(data){
    const {longitude,latitude,merchantName,address,phone,distance} = data
    return await merchantModel.create({
        coordinates: {longitude,latitude},
        name:merchantName,
        address,
        phone,
        distance
    })
}

export async function findOneMerchant(query){
    const {longitude,latitude,merchantName,address,phone,distance} = query
    return await merchantModel.findOne({
        coordinates: {longitude,latitude},
        name:merchantName,
        address,
        phone,
        distance
    })
}

export async function findMerchant(query){
    const {longitude,latitude,merchantName,address,phone,distance} = query
    return await merchantModel.find({
        coordinates: {longitude,latitude},
        name:merchantName,
        address,
        phone,
        distance
    })
}