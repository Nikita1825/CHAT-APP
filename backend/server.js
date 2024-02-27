import dotenv from "dotenv"
import  express  from 'express';

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();


dotenv.config()
const PORT = process.env.PORT || 5000; 

// app.get("/", (req, res)=>{
//   res.send("Hello world!")  
// })

app.use(express.json())
app.use("/api/auth", authRoutes)

app.listen(PORT, ()=> {
  connectToMongoDB()
   console.log(`Server Running on port ${PORT} `)
  });