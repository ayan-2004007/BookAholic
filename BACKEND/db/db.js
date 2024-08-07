import mongoose from "mongoose";
import {DBNAME} from "../constants.js";
import dotenv from "dotenv";

dotenv.config();

const connectDB=async ()=>{
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DBNAME}`)
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGODB connection FAILED : ", error);
        process.exit(1)
    }
}

export default connectDB