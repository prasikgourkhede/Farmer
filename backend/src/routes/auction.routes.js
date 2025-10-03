import express from "express"
import { closeAuctionController, createAuctionController, findAuctionController } from "../controller/aucion.controller.js"
import { authFarmerMiddleware, authBuyerMiddleware } from "../middleware/auth.middleware.js"
import { auctionValidator } from "../middleware/validator.middleware.js"
import multer from "multer"

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



    router.put("/close-auction", 
        closeAuctionController);
export default router