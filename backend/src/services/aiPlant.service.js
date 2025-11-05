import { GoogleGenAI } from "@google/genai";
import config from "../config/config.js";


const GEMINI_API_KEY = config.GEMINI_API_KEY
const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
});

export async function generateAiPlant(file) {
    const base64Image = new Buffer.from(file.buffer).toString('base64');
    const contents = [
        {
            inlineData: {
                mimeType:file.mimetype,
                data: base64Image,
            },
        },
        { text: "Caption this image." },
    ];
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
        config:{

            systemInstruction:`
            The uploaded image must be of a plant. 
If the image is confirmed to be a plant, analyze its condition and provide practical suggestions 
to improve the plant’s productivity and efficiency. 
Your suggestion should be clear, concise, and between 20 to 50 words.
            `
        }

    });

    return response.text
}