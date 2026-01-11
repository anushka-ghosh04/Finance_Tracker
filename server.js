const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Helper function to read data
const readData = () => {
    if (!fs.existsSync(DATA_FILE)) {
        return [];
    }
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
};

// Helper function to write data
const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Routes

// Get all transactions
app.get('/api/transactions', (req, res) => {
    const transactions = readData();
    res.json(transactions);
});

// Add a transaction
app.post('/api/transactions', (req, res) => {
    const { text, amount, category } = req.body;

    if (!text || !amount || !category) {
        return res.status(400).json({ error: 'Please provide text, amount, and category' });
    }

    const transactions = readData();
    const newTransaction = {
        id: Date.now(),
        text,
        amount: parseFloat(amount),
        category
    };

    transactions.push(newTransaction);
    writeData(transactions);

    res.status(201).json(newTransaction);
});

// Delete a transaction
app.delete('/api/transactions/:id', (req, res) => {
    const { id } = req.params;
    let transactions = readData();

    transactions = transactions.filter(transaction => transaction.id !== parseInt(id));
    writeData(transactions);

    res.json({ message: 'Transaction removed' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
