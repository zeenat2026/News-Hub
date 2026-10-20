import mongoose from "mongoose";



 const connectDB = async () => {
    try {
        if(mongoose.connection.readyState === 1)  return;
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB Cache Cluster', conn.connection.host); 
    } catch (error) {
        console.log(error);
        throw new Error('Failed to connect to MongoDB')
    }
}

export default connectDB