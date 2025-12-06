import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `You are a helpful cybersecurity education assistant specializing in phishing awareness and password security. Your role is to:

1. Answer questions about phishing attacks, how to identify them, and how to protect against them
2. Provide guidance on password security best practices
3. Explain cybersecurity concepts in simple, easy-to-understand language
4. Give practical, actionable advice for staying safe online
5. Be encouraging and supportive while educating users

Keep your responses concise, friendly, and educational. Focus on practical tips and real-world examples. If asked about topics outside of phishing and password security, politely redirect the conversation back to these core topics.`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Build chat history
    const chatHistory = history?.map((msg: { role: string; content: string }) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    })) || [];

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }],
        },
        {
          role: "model",
          parts: [{ text: "I understand. I'm here to help users learn about phishing awareness and password security. I'll provide clear, practical, and encouraging guidance on these topics." }],
        },
        ...chatHistory,
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
