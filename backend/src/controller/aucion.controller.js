import { createAuction, findAuction, findOneAuction } from "../dao/auction.dao.js"
import { closeBidding, createBidding } from "../dao/bidding.dao.js"
import { findBuyer } from "../dao/buyer.dao.js"
import { findFarmer } from "../dao/seller.dao.js"
import { uploadFile } from "../services/storage.service.js"
import {v4 as uuidv4} from "uuid"


export async function createAuctionController(req,res){
    const {cropName,cropImage,farmer_id,buyer_id,merchant_id,basePrice,currentAmount,finalPrice} = req.body

    const file = await uploadFile(req.file, uuidv4())

    const isFarmerValid = await findFarmer({id: farmer_id})
    if(!isFarmerValid){
        return res.status(400).json({
            message: "Invalid Farmer not found"
        })
    }

    
    const auction = await createAuction({
        cropName,
        cropImage: file.cropImage,
        farmer_id,
        buyer_id,
        merchant_id,
        basePrice,
        currentAmount,
        finalPrice
    })
    res.status(201).json({
        message: "Auction created successfully",
        auction: {
            cropName,
            cropImage: file.cropImage,
            farmer_id,
            buyer_id,
            merchant_id,
            id: auction._id
        }
    })
}


export async function findAuctionController(req,res){
    const {cropName,cropImage,farmer_id,buyer_id,merchant_id,basePrice,currentAmount,finalPrice} = req.body
    const isBuyerValid = await findBuyer({id: buyer_id})
    if(!isBuyerValid){
        return res.status(400).json({
            message: "Buyer not found"
        })
    }
    const auction = await findAuction({
        cropName,
        cropImage: file.cropImage,
        farmer_id,
        buyer_id,
        merchant_id,
        basePrice,
        currentAmount,
        finalPrice
    })
    res.status(200).json({
        message: "Auction created successfully",
        auction: auction
    })
}



export async function findOneAuctionController(req,res){
    const {cropName,cropImage,farmer_id,buyer_id,merchant_id,basePrice,currentAmount,finalPrice} = req.body
    const isBuyerValid = await findOneAuction({id: buyer_id})
    if(!isBuyerValid){
        return res.status(400).json({
            message: "Buyer not found"
        })
    }
    const auction = await findOneAuction({
        cropName,
        cropImage: file.cropImage,
        farmer_id,
        buyer_id,
        merchant_id,
        basePrice,
        currentAmount,
        finalPrice
    })
    res.status(200).json({
        message: "Auction created successfully",
        auction: auction
    })
}



export async function createBiddingController(req,res){
    const { auction_id, buyer_id, currentAmount, finalAmount} = req.body
    const isAuctionExist = await findOneAuction({ _id: auction_id})
    if(!isAuctionExist){
        return res.status(400).json({
            message: "Auction not found"
        })
    }
    const bidding = await createBidding({
        auction_id: auction_id,
        buyer_id: buyer_id,
        currentAmount: currentAmount,
        finalAmount: finalAmount
    })
    res.status(201).json({
        message: "bidding created successfully",
        bidding
    })
}



export async function closeBiddingController(req, res) {
    try {
      const { auction_id ,winner, currentAmount, finalAmount} = req.query;
  
      const auction = await closeBidding({
        auction_id,
        winner, 
        currentAmount, 
        finalAmount});
  
      if (auction_id) {
        return res.status(404).json({ message: "Auction not found" });
      }
  
      res.status(200).json({
        message: "Bidding closed successfully",
        auction: {
            auction_id,
            winner,
            currentAmount,
            finalAmount
        },
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
}