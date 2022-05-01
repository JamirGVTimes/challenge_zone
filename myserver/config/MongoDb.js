import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }); 
        console.log(`Mongo Connected successfully`);
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1);
    }
};

export default connectDatabase;