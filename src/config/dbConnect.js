import mongoose from "mongoose";

mongoose.connect("mongodb+srv://cairison:123456cairison@cluster0.bkmw8vq.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
