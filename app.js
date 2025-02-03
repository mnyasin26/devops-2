// app.js

const express = require('express');
const app = express();
const port = 3000;

// Endpoint untuk 'Hello, World!'
app.get('/', (req, res) => {
    res.send('Hello, World!5');
});

// Start server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
});
