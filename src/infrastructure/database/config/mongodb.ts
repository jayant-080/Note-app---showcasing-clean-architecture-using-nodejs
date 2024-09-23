import mongoose from 'mongoose'
import { DatabaseError } from '../../../utils/Errors/DatabaseError'


export const ConnectToDB = async()=>{

    if(!process.env.DB_URL){
        throw new DatabaseError("Database URL cannot be empty")
    }

    const DB_URL = process.env.DB_URL

    await mongoose.connect(DB_URL)

    console.log("Database is running")



}