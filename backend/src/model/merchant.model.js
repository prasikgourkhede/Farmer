import mongoose from "mongoose"


const merchantSchema = new mongoose.Schema({
    location: {
        type: {
            type: String,
            enum: ['Point'], // 'location.type' must be 'Point'
            // required: true
        },
        coordinates: {
            latitude: {
                type: Number,
                // required: true
            },
            longitude: {
                type: Number,
                // required: true
            }
        }
    },
    name: {
        type: String,
        // required: true,
        trim: true
    },
    address: {
        type: String,
        // required: true,
        trim: true
    },
    distance: {
        type: Number,
        // required: true
    },
    phone: {
        type: String,
        trim: true
    },
    picture: {
        type: String,
        trim: true,
        default: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2EwMDkta2Fib29tcGljcy0wODMzLmpwZw.jpg",
        
    }
});

// Create a 2dsphere index on the location field for fast geospatial queries
merchantSchema.index({ location: '2dsphere' });

const merchantModel = mongoose.model('Merchant', merchantSchema);

export default merchantModel;