const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

const apiKey = 'ACCOUNT_KEY';
const apiSecret = 'ACCOUNT_SECRET';

app.get('/generate-jwt', (req, res) => {

    const currentTime = Math.floor(Date.now() / 1000);
    const payload = {
        iss: apiKey,
        ist: 'account',
        iat: currentTime,
        exp: currentTime + 300 // 5 minutes
    };

    try {
        const token = jwt.sign(payload, apiSecret, { algorithm: 'HS256' });
        res.json({ token: token });
    } catch (error) {
        console.error('Error generating JWT:', error.message);
        res.status(500).json({ error: 'Failed to generate JWT' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
