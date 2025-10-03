import aiPlantModel from "../model/aiPlant.model.js"




export async function createAiPlant(data){
    const {url, description} = data

    const plants = await aiPlantModel.create({
        image: url,
        description,
    })

    return plants
}