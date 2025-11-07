import multer from "multer"
import express from "express"
import { createCropController } from "../controller/crop.controller.js"
import { authFarmerMiddleware } from "../middleware/auth.middleware.js"

const upload = multer({storage: multer.memoryStorage()})
const router = express.Router()


router.post("/",
    authFarmerMiddleware,
    upload.single("image"),
    createCropController
)

export default router