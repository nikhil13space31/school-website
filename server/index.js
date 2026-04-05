const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { connectDB, Application, Contact } = require('./db');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// --- ROUTES ---

// 1. Submit an Admission Application
app.post('/api/apply', async (req, res) => {
  try {
    const { studentName, parentName, email, phone, grade, referredBy } = req.body;
    
    if (!studentName || !parentName || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newApp = new Application({ studentName, parentName, email, phone, grade, referredBy });
    await newApp.save();
    
    res.status(201).json({ message: 'Application submitted securely to MongoDB!', id: newApp._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save application to cloud database.' });
  }
});

// 2. Submit a Contact Us Form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: 'Message securely saved to MongoDB!', id: newContact._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save message to cloud database.' });
  }
});

// 3. Admin: Get all Applications
app.get('/api/admin/applications', async (req, res) => {
  try {
    const apps = await Application.find().sort({ createdAt: -1 });
    // Transform parameters to match the frontend table mapping exactly
    const transformed = apps.map(app => ({...app.toObject(), id: app._id, submittedAt: app.createdAt}));
    res.json(transformed);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Cloud database retrieval error' });
  }
});

// 4. Admin: Get all Contacts
app.get('/api/admin/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    const transformed = contacts.map(c => ({...c.toObject(), id: c._id, submittedAt: c.createdAt}));
    res.json(transformed);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Cloud database retrieval error' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend Cloud Server successfully running on http://localhost:${PORT}`);
});
