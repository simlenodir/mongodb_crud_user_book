import express, { Application } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import mongo from "./config/mongo"
import routes from "./module/routes"

dotenv.config()

const PORT = process.env.PORT || 7777
const app: Application = express()
app.use(express.json())

mongoose.set('strictQuery', true);
mongo()
.then(():void => {
    console.log('Connected');
})
.catch((err: unknown) => {
    console.log(err);
})

app.use(routes)

app.listen(PORT, ():void => {
    console.log(`Aplication is started ${PORT}`);
    
})
