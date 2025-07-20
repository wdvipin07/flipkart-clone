import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Product from "../models/Product.js";
import initData from "./datai.js";

const MONGO_URL =
  "mongodb+srv://User:ecommerce-web@cluster0.wkbkwih.mongodb.net/flipkart?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => {
    console.log("connected to Atlas DB");
    return initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(initData);
  console.log("Data initialized successfully");
};
