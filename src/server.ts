import express, { Application } from "express"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 7777
const app: Application = express()

app.listen(PORT, ():void => {
    console.log(`Aplication is started ${PORT}`);
    
})
