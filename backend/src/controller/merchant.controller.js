import axios from 'axios';
// import config from '../config/config.js';
import { createMerchant } from '../dao/merchant.dao.js';


const key = "mkLHFhQI8ZJb1S4xGUht8QXwLxTATsfu"
const apiKey = key;


const radiusInMeters = 30000; // 30 km
const limit = 4;


export async function findNearbyMerchantsController(req, res) {
    const { latitude, longitude } = req.body
    const merchants = await createMerchant({ $and: [{ latitude }, { longitude }] })
    if (!merchants) {
        return res.status(400).json({
            message: "Latitude and Longitude are required"
        })
    }
    const tomTomUrl = `https://api.tomtom.com/search/2/nearbySearch/.json
?key=${apiKey}
&lat=${latitude}
&lon=${longitude}
&radius=${radiusInMeters}
&limit=${limit}
&categorySet=7332004,7335,9361073,9361021,9361022`;  // Grocery, Markets, Agriculture



    try {
        const response = await axios.get(tomTomUrl)
        const results = response.data.results
        if (!results) {
            return res.status(400).json({
                message: "Merchants not found"
            })
        }
        const merchants = await Promise.all(results.map(result => ({
            name: result.poi?.name,
            address: [
                result.address?.streetNumber,
                result.address?.streetName,
                result.address?.municipalitySubdivision,
                result.address?.municipality,
                result.address?.countrySubdivisionName,
                result.address?.postalCode,
            ]
                .filter(Boolean)
                .join(", "),
            distance: (result.dist / 1000).toFixed(2), // km
            phone: result.poi?.phone || "N/A",
            latitude: result.position?.lat,
            longitude: result.position?.lon,
            picture: result.poi?.photo || "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2EwMDkta2Fib29tcGljcy0wODMzLmpwZw.jpg",
            id: result.id
        })));
        


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

