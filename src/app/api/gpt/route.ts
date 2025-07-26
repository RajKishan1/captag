// import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { prompt } = body;

//     if (!prompt) {
//       return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
//     }

//     const chatResponse = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo", // or "gpt-4"
//       messages: [{ role: "user", content: prompt }],
//     });

//     return NextResponse.json({
//       result: chatResponse.choices[0].message.content,
//     });
//   } catch (error: any) {
//     console.error("ChatGPT error:", error.message);
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    // Check if API key exists
    if (!process.env.OPENAI_API_KEY) {
      console.error("OpenAI API key is missing");
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000, // Add reasonable limit
      temperature: 0.7, // Add temperature for consistency
    });

    // Check if response has the expected structure
    if (!chatResponse.choices || chatResponse.choices.length === 0) {
      console.error("No choices in OpenAI response:", chatResponse);
      return NextResponse.json({ error: "No response from OpenAI" }, { status: 500 });
    }

    const messageContent = chatResponse.choices[0].message?.content;
    
    if (!messageContent) {
      console.error("No message content in OpenAI response");
      return NextResponse.json({ error: "Empty response from OpenAI" }, { status: 500 });
    }

    return NextResponse.json({
      result: messageContent,
    });
  } catch (error: any) {
    console.error("ChatGPT error:", error);
    
    // Handle specific OpenAI errors
    if (error.status) {
      return NextResponse.json(
        { error: `OpenAI API error: ${error.message}` }, 
        { status: error.status }
      );
    }
    
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}