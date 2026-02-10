import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.kopgp8o.mongodb.net`;

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
        console.log("----------------------")
        console.log(`\nMongoDB Connected !!\nDB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB Connection FAILED :", error);
        process.exit(1);
    }
}
export default connectDB;