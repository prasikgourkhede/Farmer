import express from "express"
import { findNearbyMerchantsController } from "../controller/merchant.controller.js"


const router = express.Router()



router.post("/nearby", findNearbyMerchantsController)

export default router