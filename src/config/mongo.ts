import mongoose, { Mongoose } from "mongoose";
import readers from "../module/users/model"
import books from "../module/books/model"

export default async():Promise<Mongoose> => await mongoose.connect('mongodb://127.0.0.1:27017/n37')