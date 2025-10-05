import express from "express"
import {closeBiddingController, createAuctionController, createBiddingController, findAuctionController } from "../controller/aucion.controller.js"
import { authFarmerMiddleware, authBuyerMiddleware } from "../middleware/auth.middleware.js"
import { auctionValidator } from "../middleware/validator.middleware.js"
import multer from "multer"
import {autoCloseBiddingMiddleware } from "../middleware/closeAutomaticaly.middleware.js"

const upload = multer({storage: multer.memoryStorage()})

const router = express.Router()


router.post("/create-auction",
     authFarmerMiddleware,
     upload.single("image"),
     auctionValidator,
    createAuctionController,)

router.get("/", 
    authFarmerMiddleware,
    findAuctionController)


router.get("/find-auction", 
    authBuyerMiddleware,
    findAuctionController)



router.post("/create-bidding",
    authBuyerMiddleware,
    createBiddingController
)

router.delete("/close-bidding",
    autoCloseBiddingMiddleware,
    closeBiddingController
)

export default router