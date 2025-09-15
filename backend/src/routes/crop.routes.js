import multer from "multer"
import express from "express"
import { authMiddleware } from "../middleware/auth.middleware.js"
import { createCropController } from "../controller/crop.controller.js"

const upload = multer({storage: multer.memoryStorage()})
const router = express.Router()


router.post("/",
    authMiddleware,
    upload.single("image"),
    createCropController
)

export default router