// netlify/functions/getPlan.js

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async (req, res) => {
  try {
    const mbti = req.query.mbti || "Unknown";

    // 📝 Basic marketing plan prompt — tweak to taste
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert real estate marketing strategist. Provide clear, concise marketing plans."
        },
        {
          role: "user",
          content: `Create a brief actionable marketing plan for the buyer archetype ${mbti}.
          
          Include target audience, top 3 messaging hooks, recommended channels, and 1 bonus tactic.`
        }
      ],
    });

    const planText = completion.choices[0].message.content;

    return new Response(planText, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });

  } catch (error) {
    console.error("OpenAI Error:", error);

    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
