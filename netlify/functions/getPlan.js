import fs from 'fs';
import path from 'path';

export async function handler(event) {
  try {
    const buyerType = event.queryStringParameters.buyerType;

    if (!buyerType) {
      return {
        statusCode: 400,
        body: "No buyerType provided."
      };
    }

    // 🗂️ Reads from /plans folder (use .md or .txt)
    const planPath = path.join(process.cwd(), 'plans', `${buyerType}.md`);
    console.log("Looking for plan at:", planPath);

    if (!fs.existsSync(planPath)) {
      return {
        statusCode: 404,
        body: "Plan not found."
      };
    }

    const plan = fs.readFileSync(planPath, 'utf-8');

    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: plan
    };

  } catch (err) {
    console.error("getPlan.js Error:", err);
    return {
      statusCode: 500,
      body: "Server error."
    };
  }
}
