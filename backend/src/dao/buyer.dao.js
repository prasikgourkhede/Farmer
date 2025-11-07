import buyerModel from "../model/buyer.model.js";



export async function createBuyer(data){
    return await buyerModel.create(data)
}

export async function findOneBuyer(query){
    return await buyerModel.findOne(query)
}

export async function findBuyer(query){
    return await buyerModel.find(query)
}