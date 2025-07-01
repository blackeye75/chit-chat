import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
       const res= await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${res.connection.host}`);
        
    } catch (error) {
        console.log(`Error error in connecting MongoDB: ${error.message}`);
        process.exit(1); // Exit the process with failure
    }
} 
