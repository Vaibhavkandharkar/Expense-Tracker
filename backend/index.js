import express, { urlencoded } from "express";
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js"
import expenseRoute from "./routes/expense.route.js"

dotenv.config({});



const app = express();  
const PORT = 8000;

//middleware
app.use(express.json());
app.use(urlencoded({extended:true}))
app.use(cookieParser())
const corsOptions = {
    origin: "http://localhost:5173",
    credentials:true
}
app.use(cors(corsOptions));

//api's

app.use("/api/v1/user", userRoute);
app.use("/api/v1/expense", expenseRoute);
// http:localhost:5173/api/v1/user/register   it is created 


app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
})