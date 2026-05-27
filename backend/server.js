import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'API is running...' });
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all fields: name, email, and message.' });
  }

  try {
    const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    const [result] = await db.query(query, [name, email, message]);
    
    res.status(201).json({ success: true, message: 'Message sent successfully!', id: result.insertId });
  } catch (error) {
    console.error('Error inserting into database:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
