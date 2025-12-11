import cropModel from "../model/crop.model.js"





export async function createCrop(data){
    const {image,cropName,contactNo,mentions} = data

   return  await cropModel.create({
        image,
        cropName,
        contactNo,
        mentions
    })
}