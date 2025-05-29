import functions from "firebase-functions";
import fetch from "node-fetch";

exports.proxyProductCount = functions.https.onRequest(async (req, res) => {
  const apiUrl = 'https://logicust.singlewindow.io/api/v1-0/commodities/count';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data from Logicust' });
  }
});