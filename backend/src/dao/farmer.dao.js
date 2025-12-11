import farmerModel from "../model/farmer.model.js"

export async function createFarmer(data){
     return await farmerModel.create(data)
}

export async function findOneFarmer(query){
    return await farmerModel.findOne(query)
}

export async function findFarmer(query){
    return await farmerModel.find(query)
}