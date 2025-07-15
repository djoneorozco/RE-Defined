import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const handler = async function(event) {
  try {
    const body = JSON.parse(event.body || '{}');
    const { buyerType, details, customFields } = body;

    if (!buyerType) {
      return {
        statusCode: 400,
        body: 'Missing buyerType.'
      };
    }

    // 🧠 Generate prompt dynamically
    const prompt = `
You are an AI Listing Coach. 
Give me a short, clear marketing insight for a property that matches this buyer type: ${buyerType}.
Key details:
- Core Strength: ${details.coreStrength || 'N/A'}
- City: ${customFields.city || 'N/A'}
Respond in 2-3 sentences, professional and actionable.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a helpful real estate listing coach." },
        { role: "user", content: prompt }
      ]
    });

    const insight = completion.choices[0].message.content;

    return {
      statusCode: 200,
      body: JSON.stringify({ insight })
    };

  } catch (err) {
    console.error("getInsight.js Error:", err);
    return {
      statusCode: 500,
      body: 'Server error.'
    };
  }
};
