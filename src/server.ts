import express, { Application } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import mongo from "./config/mongo"

dotenv.config()

const PORT = process.env.PORT || 7777
const app: Application = express()

mongoose.set('strictQuery', true);
mongo()
.then(():void => {
    console.log('Connected');
})
.catch((err: unknown) => {
    console.log(err);
})

app.listen(PORT, ():void => {
    console.log(`Aplication is started ${PORT}`);
    
})
