const express=require("express");
const app = express();
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const authRoute=require("./routes/auth")
const usersRoute=require("./routes/users")
const moviesRoute=require("./routes/movies")
const listsRoute=require("./routes/lists")
const cors=require("cors")


dotenv.config()

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("succes connection")).catch((err)=>console.log(err))
var corsOptions={
    origin:["http://localhost:3000","http://localhost:3001"]
}

app.use(cors(corsOptions))
app.use(express.json())
app.use("/server/auth",authRoute)
app.use("/server/users",usersRoute)
app.use("/server/movies",moviesRoute)
app.use("/server/lists",listsRoute)

app.listen(8800,()=>{
    console.log("Backend server is running...")
})