import {MONGO_URL} from "../config";
import mongoose from "mongoose";
import {config} from "dotenv";
config()

const uri = MONGO_URL
export const connectToDB = () => {
    mongoose.connect(uri)
        .then(() => {
            console.log('Database ready!')
        })
        .catch((error: any) => {
            console.error(error)
        })
}
