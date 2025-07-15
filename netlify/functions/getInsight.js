exports.handler = async function(event) {
  const body = JSON.parse(event.body || '{}');
  const { buyerType, details, customFields } = body;

  if (!buyerType) {
    return {
      statusCode: 400,
      body: 'Missing buyerType.'
    };
  }

  // Example: Generate a static or dynamic insight (hardcoded for now)
  const insight = `Your listing best matches a ${buyerType} strategy. Focus on ${details.coreStrength || 'high ROI potential'} and ${customFields.city || 'your market'} to attract buyers.`;

  return {
    statusCode: 200,
    body: JSON.stringify({ insight })
  };
};
