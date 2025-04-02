const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Replace with your actual Discord webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1356945272374169651/iY_dvKK4CAeSeOBU2f0nHdBD_XtcsK4f65s_CoZPnnrDbLy0Cg0lNRdt9Kjm-QbCXfO3';

app.use((req, res, next) => {
  const visitorIp = req.ip;

  // Log the IP address
  console.log(`Visitor IP: ${visitorIp}`);

  // Send the IP address to the Discord webhook
  axios.post(DISCORD_WEBHOOK_URL, {
    content: `New visitor IP: ${visitorIp}`
  })
  .then(response => {
    console.log('Successfully sent IP to Discord webhook');
  })
  .catch(error => {
    console.error('Error sending IP to Discord webhook', error);
  });

  next();
});

app.get('/', (req, res) => {
  res.send('Hello, visitor!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
