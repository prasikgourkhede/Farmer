import farmerModel from "../model/seller.model.js"

export async function createSeller(data){
     return await farmerModel.create(data)
}

export async function findOneSeller(query){
    return await farmerModel.findOne(query)
}

export async function findSeller(query){
    return await farmerModel.find(query)
}