import dotenv from "dotenv"



dotenv.config()
const config = {
    MONGODB_URL: process.env.MONGODB_URL,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    IMAGEKIT_PUBLIC_KEY: process.env.IMAGEKIT_PUBLIC_KEY,
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
    IMAGEKIT_ENDPOINT_URL: process.env.IMAGEKIT_ENDPOINT_URL,
    TOM_TOM_API_KEY: process.env.TOM_TOM_API_KEY
}



export default config