import { MongoClient, ObjectId } from 'mongodb';

/**
 * INSTALL & RUN INSTRUCTIONS:
 * 
 * 1. Install the official MongoDB driver (Already Complete):
 *    npm install mongodb dotenv
 * 
 * 2. Set your connection string in your environment (PowerShell):
 *    $env:MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/?retryWrites=true&w=majority"
 * 
 * 3. Run this script:
 *    node mongodbExample.js
 */

// Read from environment variables, or throw an error if not present
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ ERROR: MONGODB_URI environment variable is not set.");
  console.error("Please set it in your terminal before running this script.");
  process.exit(1);
}

// Initialize the MongoDB Client
const client = new MongoClient(uri);

// We will use a database named "schoolHub" and a collection called "admissions_inquiries"
const dbName = 'schoolHub';
const collectionName = 'admissions_inquiries';

async function run() {
  try {
    console.log("⏳ Attempting to connect to MongoDB Atlas...");
    await client.connect();
    console.log("✅ Successfully connected to MongoDB Atlas!");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // --- 1. Insert 10 Realistic Documents ---
    console.log("\n📝 Preparing 10 mock admission inquiries...");
    
    // Generating distinct dates by subtracting days from the current time
    const now = new Date();
    
    const documentsToInsert = [
      { studentName: "Aarav Sharma", grade: "1st Standard", status: "Pending", submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 2) }, // 2 hours ago
      { studentName: "Riya Verma", grade: "5th Standard", status: "Reviewed", submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 24) }, // 1 day ago
      { studentName: "Ishaan Gupta", grade: "LKG", status: "Pending", submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 48) }, // 2 days ago
      { studentName: "Ananya Patel", grade: "10th Standard", status: "Accepted", submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 72) }, // 3 days ago
      { studentName: "Kavya Singh", grade: "UKG", status: "Pending", submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 96) }, // 4 days ago
      { studentName: "Shaurya Joshi", grade: "8th Standard", status: "Waitlisted", submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 120) }, // 5 days ago
      { studentName: "Diya Reddy", grade: "2nd Standard", status: "Pending", submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 144) }, // 6 days ago
      { studentName: "Arjun Nair", grade: "7th Standard", status: "Reviewed", submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 168) }, // 7 days ago
      { studentName: "Tara Menon", grade: "9th Standard", status: "Accepted", submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 192) }, // 8 days ago
      { studentName: "Veer Desai", grade: "3rd Standard", status: "Pending", submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 216) } // 9 days ago
    ];

    const insertResult = await collection.insertMany(documentsToInsert);
    console.log(`✅ Successfully inserted ${insertResult.insertedCount} documents.`);

    // --- 2. Read and Print the 5 Most Recent Documents ---
    console.log("\n🔍 Fetching the 5 most recent admission applications...");
    
    // Sort by submittedAt descending (-1), then limit to 5 results
    const recentApplications = await collection
      .find({})
      .sort({ submittedAt: -1 })
      .limit(5)
      .toArray();

    recentApplications.forEach((doc, index) => {
      console.log(`  ${index + 1}. [${doc.submittedAt.toISOString()}] ${doc.studentName} (${doc.grade}) - Status: ${doc.status}`);
    });

    // --- 3. Read and Print ONE Document by _id ---
    // Grabbing the ID of the 3rd document we just inserted as a test case
    const targetId = Object.values(insertResult.insertedIds)[2];
    
    console.log(`\n🎯 Fetching specific document by _id (${targetId})...`);
    const singleDocument = await collection.findOne({ _id: targetId });
    
    if (singleDocument) {
      console.log("✅ Found exact match:");
      console.log(singleDocument);
    } else {
      console.log("❌ Document not found.");
    }

  } catch (err) {
    console.error("\n❌ An error occurred during database operations:");
    console.error(err.message);
  } finally {
    // --- 4. Close the MongoDB Connection ---
    console.log("\n🔌 Closing the MongoDB connection...");
    await client.close();
    console.log("👋 Connection closed safely.");
  }
}

// Execute the async flow
run().catch(console.dir);
