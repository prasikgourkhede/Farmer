import axios from 'axios';
// import config from '../config/config.js';
import { createMerchant } from '../dao/merchant.dao.js';


const key = "mkLHFhQI8ZJb1S4xGUht8QXwLxTATsfu"
const apiKey = key;


const radiusInMeters = 30000; // 30 km
const query = 'crop merchant';
const cropMerchantCategories = "9362,7315,9361,9361024,9361022,9361021,9361073";
const limit = 8;

export async function createMerchantController(req, res) {
    const { latitude, longitude } = req.body
    const merchants = await createMerchant({ $and: [{ latitude }, { longitude }] })
    if (!merchants) {
        return res.status(400).json({
            message: "Latitude and Longitude are required"
        })
    }
    const tomTomUrl = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${apiKey}&lat=${latitude}&lon=${longitude}&radius=${radiusInMeters}&limit=${limit}&categorySet=${cropMerchantCategories}&query=${encodeURIComponent(query)}`;


    try {
        const response = await axios.get(tomTomUrl)
        const results = response.data.results
        if (!results) {
            return res.status(400).json({
                message: "Merchants not found"
            })
        }
        const merchants = results.map(result => ({
            name: result.name,
            address: result.address,
            distance: (result.distance / 1000).toFixed(2),
            phone: result.poi?.phone,
        }))
        return res.status(201).json({
            message: "Merchants fetched successfully",
            merchants: merchants,
            id: merchants._id
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching merchants",
            error: error.message
        })
    }
}

