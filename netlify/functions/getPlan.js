import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function handler(event) {
  try {
    const mbti = event.queryStringParameters.mbti || "Unknown";

    // Example: parse your matrix to get details
    const buyer = mbti; // Like "FamilyNestSeeker-Mid-SF"

    const prompt = `You are an elite real estate listing coach. Give me a marketing plan for ${buyer}. 
    Include: 1) A catchy headline, 2) 3 unique marketing tactics, 3) a social caption idea.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a top real estate marketing strategist." },
        { role: "user", content: prompt },
      ],
    });

    const plan = completion.choices[0].message.content;

    return {
      statusCode: 200,
      body: plan,
    };
  } catch (err) {
    console.error("OpenAI error:", err);
    return {
      statusCode: 500,
      body: "Server error",
    };
  }
}
