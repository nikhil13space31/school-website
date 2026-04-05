const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.warn('⚠️ MONGO_URI is missing from environment variables!');
      console.log('Backend will pause database features until a connection string is provided.');
      return;
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Successfully connected to MongoDB Atlas Cloud Database.');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

// --- Mongoose Schemas & Models ---

const applicationSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  parentName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  grade: { type: String, required: true },
  referredBy: { type: String, default: '' },
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);
const Contact = mongoose.model('Contact', contactSchema);

module.exports = { connectDB, Application, Contact };
