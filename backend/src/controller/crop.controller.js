import {v4 as uuidv4} from "uuid"
import { uploadFile } from "../services/storage.service.js"
import { createCrop } from "../dao/crop.dao.js"


export async function createCropController(req,res){
    const { cropName, contactNo, mentions } = req.body;

    const file = await uploadFile(req.file, uuidv4());
    

    const crops = await createCrop({
        image: file.image,
        cropName,
        contactNo,
        mentions,
    })

    return res.status(201).json({
        message: "crops created successfully",
        crops: crops
    })
}