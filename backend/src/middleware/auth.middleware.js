import jwt from "jsonwebtoken"
import config from "../config/config.js"
import { findOneFarmer } from "../dao/farmer.dao.js"
import { findOneBuyer } from "../dao/buyer.dao.js"


export async function authFarmerMiddleware(req,res,next){
    const token = req.cookies.token
    if(!token){
        return res.status(400).json({
            message: "Unauthorized access, please login frist"
        })
    }
    try{
        const decode = jwt.verify(token, config.JWT_SECRET_KEY)
        const user = await findOneFarmer({id: decode._id})
        req.user = user
        next()
    }catch(error){
        return res.status(401).json({
            message: "Invalid token please login frist"
        })
    }
}


export async function authBuyerMiddleware(req,res,next){
    const token = req.cookies.token
    if(!token){
        return res.status(400).json({
            message: "unauthorized access, login frist"
        })
    }
    try{
        const decode = jwt.verify(token, config.JWT_SECRET_KEY)
        const user = await findOneBuyer({id: decode._id})
        req.user = user
        next()
    }catch(error){
        res.status(401).json({
            message: "Invalid token please login frist"
        })
    }
}