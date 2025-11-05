import axios from 'axios';
import { createMerchant } from '../dao/merchant.dao.js';
import { createLike, findOneDelet } from '../dao/likeMerchant.dao.js';


const apiKey = "mkLHFhQI8ZJb1S4xGUht8QXwLxTATsfu";
const radiusInMeters = 30000; // 30 km
const limit = 10;



export async function findNearbyMerchantsController(req, res) {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
        return res.status(400).json({
            message: "Latitude and Longitude are required"
        });
    }

    const tomTomUrl = `https://api.tomtom.com/search/2/nearbySearch/.json?key=${apiKey}&lat=${latitude}&lon=${longitude}&radius=${radiusInMeters}&limit=${limit}&categorySet=7332004,7335,9361073,9361021,9361022`;

    try {
        const response = await axios.get(tomTomUrl);
        const results = response.data.results;

        if (!results) {
            return res.status(404).json({
                message: "Merchants not found"
            });
        }

        const merchants = results.map(result => ({
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
            distance: `${(result.dist / 1000).toFixed(1)} km`,
            phone: result.poi?.phone || "N/A",
            latitude: result.position?.lat,
            longitude: result.position?.lon,
            picture: result.poi?.photo || "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2EwMDkta2Fib29tcGljcy0wODMzLmpwZw.jpg",
            id: result.id
        }));

        return res.status(200).json({
            message: "Merchants fetched successfully",
            merchants: merchants,
            count: merchants.length
        });

    } catch (error) {
        return res.status(400).json({
            message: "Error fetching merchants",
            error: error.message
        });
    }
}
export async function likeMerchantController(req, res) {
    const {merchant} = req.body
    const farmer = req.farmer

    const isLikeAlready = await findOneLike({farmer, merchant})
    if(isLikeAlready){
        await findOneDelet({farmer: farmer._id, merchant})
        return res.status(200).json({
            message: "Merchant unliked successfully",
            isLike: false
        })
    }
    const like = await createLike({farmer: farmer._id, merchant})
    return res.status(201).json({
        message: "Merchant liked successfully",
        isLike: true,
        like
    })
}