import express from "express"
import { findNearbyMerchantsController, likeMerchantController } from "../controller/merchant.controller.js"
import { authFarmerMiddleware } from "../middleware/auth.middleware.js"


const router = express.Router()



router.post("/nearby", 
    authFarmerMiddleware,
    findNearbyMerchantsController)


router.post("/like",
    authFarmerMiddleware, 
    likeMerchantController)
export default router