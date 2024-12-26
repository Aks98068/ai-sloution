const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'newuser', // Use the new username
    password: 'newpassword', // Use the new password
    database: 'ai_solution' // Change this to your database name
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Chatbot API
app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;
    // Here you would integrate your AI logic
    const aiResponse = `You said: ${userMessage}`; // Placeholder response
    res.json({ response: aiResponse });
});

// Admin Login API
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ success: true, message: 'Login successful!' });
        } else {
            res.json({ success: false, message: 'Invalid credentials!' });
        }
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});