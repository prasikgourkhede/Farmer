import {v4 as uuidv4} from "uuid"
import { uploadFile } from "../services/storage.service.js"
import { generateAiPlant } from "../services/aiPlant.service.js"
import { createAiPlant } from "../dao/aiPlant.dao.js"


export async function aiPlantController(req,res){
    const [file,description] = await Promise.all([
        uploadFile(req.file, uuidv4()),
        generateAiPlant(req.file)
    ])

    const plant = await createAiPlant({
        url: file.url,
        description
    })
    return res.status(201).json({
        message: "description created successfully",
        plant: plant
    })
}