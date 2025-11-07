import mongoose from "mongoose";



const aiPlantSchema = mongoose.Schema({
    image:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
})

const aiPlantModel = mongoose.model("AiPlant", aiPlantSchema)

export default aiPlantModel