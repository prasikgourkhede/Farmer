import mongoose from "mongoose";
import config from "../config/config.js";



export async function connectDB(){
    mongoose.connect(config.MONGODB_URL).then(()=>{
        console.log("databse connected to server");
        
    }).catch((err)=>{
        console.log("error in db",err);
        
    })
}