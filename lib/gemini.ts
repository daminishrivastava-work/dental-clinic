import { GoogleGenAI } from '@google/genai';

// Initialize Gemini client placeholder
const apiKey = process.env.GEMINI_API_KEY || '';
export const ai = new GoogleGenAI({ apiKey: apiKey });
