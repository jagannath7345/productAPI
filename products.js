require("dotenv").config();
const connection = require("./db/connectDB");
const product = require("./models/productSchema");
const productJson = require("./products.json");

const dataSave = async () => {
  try {
    await connection(process.env.DATABASE_URL);
    await product.create(productJson);
    console.log("data save sucessfully");
  } catch (error) {
    console.log(error);
  }
};

dataSave();
