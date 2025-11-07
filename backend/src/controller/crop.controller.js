import {v4 as uuidv4} from "uuid"
import { uploadFile } from "../services/storage.service.js"
import { createCrop } from "../dao/crop.dao.js"


export async function createCropController(req,res){
    const {mentions, contactNo,farmers} = req.body

    const file = await uploadFile(req.file, uuidv4());
    

    const crops = await createCrop({
        mentions,
        image: file.image,
        contactNo,
        farmers: req.user ? req.user._id : (req.farmers ? req.farmers._id : undefined)
    })

    return res.status(201).json({
        message: "crops created successfully",
        crops: crops
    })
}