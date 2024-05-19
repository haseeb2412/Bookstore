import express from "express"
import cors from "cors"
import connectDB from "../Backend/DB/connect.js"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express();
const PORT =5001;
app.use(cors());
app.use(express.json());

// defining Routerss
app.use("/book",bookRoute);
app.use("/user",userRoute);

const start=async()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`server connecting on the Port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();