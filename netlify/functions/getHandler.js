exports.handler = async function(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Netlify Functions are working for RE-DEFINED!" })
  };
};
