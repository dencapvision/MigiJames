
import { GoogleGenAI } from "@google/genai";

// Use getGeminiConsultant to interact with Gemini API
export const getGeminiConsultant = async (prompt: string, context: string) => {
  // Always create a new GoogleGenAI instance right before making an API call 
  // to ensure it uses the most up-to-date API key.
  // Guideline: MUST use new GoogleGenAI({ apiKey: process.env.API_KEY })
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context about MigiJames Analysis:\n${context}\n\nUser Question: ${prompt}`,
      config: {
        systemInstruction: "You are Kru Den, a professional Master Facilitator and Astrological Consultant for MigiJames brand. Answer questions based on the provided analysis in a polite, empowering, and professional Thai manner.",
        temperature: 0.7,
      }
    });

    // Access the .text property directly (not a method)
    return response.text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "เกิดข้อผิดพลาดในการเชื่อมต่อกับที่ปรึกษา AI";
  }
};
