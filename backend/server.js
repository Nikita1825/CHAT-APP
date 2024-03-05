import dotenv from "dotenv"
import  express  from 'express';
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();


dotenv.config()
const PORT = process.env.PORT || 5000; 

// app.get("/", (req, res)=>{
//   res.send("Hello world!")  
// })

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)

app.listen(PORT, ()=> {
  connectToMongoDB()
   console.log(`Server Running on port ${PORT} `)
  });