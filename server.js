// ============================================================================
// STELIX BACKEND SERVER
// Node.js + Express + MongoDB
// ============================================================================

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

const app = express();

// ============================================================================
// MIDDLEWARE
// ============================================================================
app.use(cors());
app.use(express.json());

// ============================================================================
// DATABASE CONNECTION
// ============================================================================
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/stelix';
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

connectDB();

// ============================================================================
// MODELS
// ============================================================================

// Lead Schema
const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: 2,
    },
    company: {
      type: String,
      required: [true, 'Company is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email format'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true,
    },
    industry: {
      type: String,
      enum: ['ecommerce', 'education', 'healthcare', 'realestate', 'agencies', 'other'],
      required: [true, 'Industry is required'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      minlength: 10,
      maxlength: 2000,
    },
    source: {
      type: String,
      default: 'website',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Lead = mongoose.model('Lead', leadSchema);

// ============================================================================
// ROUTES
// ============================================================================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Backend is running ✅' });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, company, email, phone, industry, message } = req.body;

    // Basic validation
    if (!name || !company || !email || !phone || !industry || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create new lead
    const newLead = new Lead({
      name,
      company,
      email,
      phone,
      industry,
      message,
      source: 'website',
    });

    // Save to database
    await newLead.save();

    console.log(`📧 New lead received: ${name} from ${company}`);

    // TODO: Send email notification (implement with Nodemailer)
    // Example:
    // await sendEmailNotification({
    //   to: 'hello@stelix.io',
    //   subject: `New Lead: ${name}`,
    //   text: `New inquiry from ${name} (${company})\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    // });

    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! We will contact you shortly.',
      leadId: newLead._id,
    });
  } catch (error) {
    console.error('Error saving lead:', error.message);
    res.status(500).json({
      error: 'Failed to submit form. Please try again later.',
    });
  }
});

// Get all leads (admin endpoint - add authentication in production)
app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve leads' });
  }
});

// ============================================================================
// ERROR HANDLING & SERVER START
// ============================================================================

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Stelix backend server running on http://localhost:${PORT}`);
  console.log(`📊 API endpoints:`);
  console.log(`   GET  /api/health`);
  console.log(`   POST /api/contact`);
  console.log(`   GET  /api/leads`);
});

module.exports = app;
