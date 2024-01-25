// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uuid = require('uuid');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/passwords', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Password Schema
const passwordSchema = new mongoose.Schema({
    password: String,
    createdAt: { type: Date, default: Date.now },
    purpose: String,
});

const Password = mongoose.model('Password', passwordSchema);

// Route to generate a password
app.get('/generate-password', async (req, res) => {
    const newPassword = generateRandomPassword();
    const passwordEntry = new Password({
        password: newPassword,
        purpose: 'Example Purpose', // You can customize this
    });
    await passwordEntry.save();
    res.json({ password: newPassword });
});

// Route to get all passwords
app.get('/get-passwords', async (req, res) => {
    const passwords = await Password.find();
    res.json({ passwords });
});

// Function to generate a random password
function generateRandomPassword() {
    // Implement your password generation logic here
    // This is a simple example, you may want to use a library for secure password generation
    return uuid.v4().substring(0, 8);
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
