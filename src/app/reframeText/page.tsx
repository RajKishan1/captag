"use client";
import InputArea from "@/components/reframeCaption/InputArea";
import SampleText from "@/components/reframeCaption/SampleText";
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";

const Page = () => {
  const [text, setText] = useState<string>("");
  const [usermood, setUsermood] = useState<string>("");
  const [socialPlatform, setSocialPlatform] = useState<string>("");
  const [visible, setVisible] = useState<string>("hidden");
  const [copied, setCopied] = useState(false);
  //   const [prompt, setPrompt] =
  //     useState(`You are a creative content rewriter for social media posts. Your task is to rewrite the given text based on the following instructions:
  // 1. **Mood**: Rewrite the content according to the user's specified mood (e.g., funny, sarcastic, emotional, professional, inspirational, etc.)
  // 2. **Platform**: Format and tone should match the given platform (e.g., LinkedIn = professional, Instagram = casual & catchy, Twitter = witty & short, WhatsApp = personal, etc.)
  // 3. **Indian Audience**: Try to add a touch of Indian relatability, trends, or light references (e.g., current affairs, desi slang, IPL, politics, Bollywood, etc.) — only if it makes sense naturally.
  // 4. **Keep it engaging and high-quality**: Make the output human-like, engaging, and clean.
  // Now, here's the input:
  // Text: ${text}
  // Mood:${usermood}
  // Platform: ${socialPlatform}

  // Please return only the rewritten version — no explanations.
  // `);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResponse("");
    const dynamicPrompt = `
You are a creative content rewriter for social media posts. Your task is to rewrite the given text based on the following instructions:
1. Mood: Rewrite the content according to the user's specified mood (e.g., funny, sarcastic, emotional, professional, inspirational, etc.)
2. Platform: Format and tone should match the given platform (e.g., LinkedIn = professional, Instagram = casual & catchy, Twitter = witty & short, WhatsApp = personal, etc.)
3. Indian Audience: Try to add a touch of Indian relatability, trends, or light references (e.g., current affairs, desi slang, IPL, politics, Bollywood, etc.) — only if it makes sense naturally.
4. Keep it engaging and high-quality: Make the output human-like, engaging, and clean.

Now, here's the input:
Text: ${text}
Mood: ${usermood}
Platform: ${socialPlatform}

Please return only the rewritten version — no explanations.
`;
    const res = await fetch("/api/gpt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: dynamicPrompt }),
    });

    const data = await res.json();
    setResponse(data.result || data.error);
    setLoading(false);
  }
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 4000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="h-screen max-w-[1200px] mx-auto flex flex-col  gap-4">
      <h1 className="text-xl font-semibold mx-auto text-center my-4 mt-8">
        Refine your Captions and Tweets
      </h1>

      <InputArea
        text={text}
        setText={setText}
        usermood={usermood}
        setUsermood={setUsermood}
        socialPlatform={socialPlatform}
        setSocialPlatform={setSocialPlatform}
        setVisible={setVisible}
        handleSubmit={handleSubmit}
      />

      <div className={`w-full p-2 ${visible}`}>
        <div className="bg-neutral-900 rounded-lg border border-neutral-700 p-2">
          <div>
            {" "}
            <p>{loading ? "thinking..." : response}</p>
          </div>
          <div className="w-full flex flex-row-reverse mt-4">
            <button
              onClick={handleCopy}
              className="text-xs px-3 py-2 border border-neutral-700 rounded-lg bg-neutral-900"
            >
              {!copied ? <FaCopy /> : <IoMdDoneAll color="green" size={14} />}
            </button>
          </div>
        </div>
      </div>

      <SampleText text={text} setText={setText} />
    </div>
  );
};

export default Page;
