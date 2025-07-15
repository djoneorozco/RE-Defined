const fs = require('fs');
const path = require('path');

exports.handler = async function(event) {
  const buyerType = event.queryStringParameters.buyerType;

  if (!buyerType) {
    return {
      statusCode: 400,
      body: 'Missing buyerType parameter.'
    };
  }

  try {
    const filePath = path.join(__dirname, '../../plans', `${buyerType}.md`);
    const plan = fs.readFileSync(filePath, 'utf8');

    return {
      statusCode: 200,
      body: plan
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Error fetching buyer plan.'
    };
  }
};
