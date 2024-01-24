const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/passwordsdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema for the passwords
const passwordSchema = new mongoose.Schema({
  password: String,
  creationDate: { type: Date, default: Date.now },
  purpose: String,
});

// Create a model based on the schema
const Password = mongoose.model('Password', passwordSchema);

// Middleware to parse JSON
app.use(bodyParser.json());

// Generate a random password
function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Route to generate a password
app.post('/generatePassword', (req, res) => {
  const { purpose, length } = req.body;
  const newPassword = generatePassword(length);

  const newPasswordEntry = new Password({
    password: newPassword,
    purpose,
  });

  newPasswordEntry.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving password to the database');
    } else {
      res.json({ password: newPassword, message: 'Password generated and saved successfully' });
    }
  });
});

// Route to retrieve all passwords
app.get('/passwords', (req, res) => {
  Password.find({}, (err, passwords) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving passwords from the database');
    } else {
      res.json(passwords);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
