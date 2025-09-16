import express from "express"
import { createMerchantController } from "../controller/merchant.controller.js"


const router = express.Router()



router.post("/nearby", createMerchantController)

export default router