import { createFarmer, findOneFarmer } from "../dao/seller.dao.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import config from "../config/config.js"
import { createBuyer, findOneBuyer } from "../dao/buyer.dao.js"




export async function farmerRegisterController(req,res){
    const {username,email,password} = req.body

    const isfarmerExist = await findOneFarmer({
        $or: [
            {username},
            {email}]
    })

    if(isfarmerExist){
        return res.status(400).json({
            message: "Seller already exsit"
        })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const Farmers = await createFarmer({
        username,
        email,
        password:hashPassword
    })

    const token = jwt.sign({id: Farmers._id} , config.JWT_SECRET_KEY)
    res.cookie("token", token)

    return res.status(201).json({
        message: "Seller created successfully",
        Farmers:Farmers,
        token
    })
}

export async function farmerLoginController(req,res){
    const {username,email,password} = req.body

    const Farmers = await findOneFarmer({
        $or:[
            {username},
            {email}]
    })
    if(!Farmers){
        return res.status(400).json({
            message: "Invalid Createdential,login again"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, Farmers.password)
    if(!isPasswordValid){
        return res.status(400).json({
            message: "Invalid Createdential,login again"
        })
    }

    const token = jwt.sign({id: Farmers._id}, config.JWT_SECRET_KEY)
    res.cookie("token", token)

    res.status(200).json({
        message: "Seller login successfully",
        Farmers:Farmers,
        token
    })
}

export async function buyerRegisterController(req,res){
    const {username,email,password} = req.body

    const isbuyerExist = await findOneBuyer({
        $or: [
            {username},
            {email}]
    })

    if(isbuyerExist){
        return res.status(400).json({
            message: "Buyer already exsit"
        })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const buyers = await createBuyer({
        username,
        email,
        password:hashPassword
    })

    const token = jwt.sign({id: buyers._id} , config.JWT_SECRET_KEY)
    res.cookie("token", token)

    return res.status(201).json({
        message: "Buyer created successfully",
        buyers:buyers,
        token
    })
}


export async function buyerLoginController(req,res){
    const {username,email,password} = req.body

    const buyers = await findOneBuyer({
        $or:[
            {username},
            {email}]
    })
    if(!buyers){
        return res.status(400).json({
            message: "Invalid Createdential,login again"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, buyers.password)
    if(!isPasswordValid){
        return res.status(400).json({
            message: "Invalid Createdential,login again"
        })
    }

    const token = jwt.sign({id: buyers._id}, config.JWT_SECRET_KEY)
    res.cookie("token", token)

    res.status(200).json({
        message: "Buyer login successfully",
        buyers:buyers,
        token
    })
}
