import express from "express"
import { aiPlantController } from "../controller/aiPlant.controller.js"
import { authFarmerMiddleware } from "../middleware/auth.middleware.js"
import multer from "multer"



const upload = multer({ storage: multer.memoryStorage() })
const router = express.Router()

router.post("/ai-plant",
    authFarmerMiddleware,
    upload.single("image"),
    aiPlantController,
)



export default router