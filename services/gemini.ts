
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiConsultant = async (prompt: string, context: string) => {
  if (!API_KEY) return "API Key is missing.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context about MigiJames Analysis:\n${context}\n\nUser Question: ${prompt}`,
      config: {
        systemInstruction: "You are Kru Den, a professional Master Facilitator and Astrological Consultant for MigiJames brand. Answer questions based on the provided analysis in a polite, empowering, and professional Thai manner.",
        temperature: 0.7,
      }
    });
    return response.text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "เกิดข้อผิดพลาดในการเชื่อมต่อกับที่ปรึกษา AI";
  }
};
