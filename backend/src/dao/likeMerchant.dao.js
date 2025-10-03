import likeModel from "../model/likeMerchant.model.js";



export async function createLike({farmer, merchant}){
    const like = await likeModel.create({farmer,merchant})
    return like ;
}

export async function findLike({farmer, merchant}){
    const like = await likeModel.find({farmer, merchant})
    return like
}

export async function findOneLike({farmer, merchant}) {
    const like = await likeModel.findOne({farmer, merchant})
    return like
}


export async function findOneDelet({farmer, merchant}){
    const like = await likeModel.findOneAndDelete({farmer, merchant})
    return like
}