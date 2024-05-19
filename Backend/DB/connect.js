import mongoose from "mongoose";

const MY_DATABASE ="mongodb+srv://practice:practice@atlascluster.pxcxdxn.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";

const connectDB=async()=>{
    try {
        console.log("we are connecting");
        const connect =await mongoose.connect(MY_DATABASE);

        console.log("connected to mongoDB");
        console.log("User Information",connect.connection.host);   
    } catch (error) {
        console.log("database connection error",error);
    }
}

export default connectDB;