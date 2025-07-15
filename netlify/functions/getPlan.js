// netlify/functions/getPlan.js

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

exports.handler = async (event) => {
  try {
    const params = event.queryStringParameters;
    const mbti = params.mbti || "Unknown";

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert real estate marketing strategist. Provide clear, concise marketing plans."
        },
        {
          role: "user",
          content: `Create a brief actionable marketing plan for the buyer archetype ${mbti}.\nInclude target audience, top 3 messaging hooks, recommended channels, and 1 bonus tactic.`
        }
      ],
    });

    const planText = completion.choices[0].message.content;

    return {
      statusCode: 200,
      body: planText
    };

  } catch (error) {
    console.error("OpenAI Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
