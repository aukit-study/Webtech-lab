const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve other HTML files
app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'shop.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'cart.html'));
});

app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, 'cheackout.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/bestseller', (req, res) => {
    res.sendFile(path.join(__dirname, 'bestseller.html'));
});

app.get('/single', (req, res) => {
    res.sendFile(path.join(__dirname, 'single.html'));
});

app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});