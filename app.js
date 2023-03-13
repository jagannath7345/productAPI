const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connectDB");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res)=>{
    res.send("hello");
})
app.use(cors())
app.use(express.json())
app.use("/api/products", productRoutes)
const start = async()=>{
    try {
        await connectDB(process.env.DATABASE_URL)
        app.listen(PORT, ()=>{
            console.log(`Server Listing at ${PORT}`)
        })
    } catch (error) {
        console.log({"error":error})
    }
}
start();