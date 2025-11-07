import cropModel from "../model/crop.model.js"





export async function createCrop(data){
    const {image,contactNo,farmers,mentions} = data

   return  await cropModel.create({
        image,
        contactNo,
        farmers,
        mentions
    })
}