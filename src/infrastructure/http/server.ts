
import 'reflect-metadata'
import { ConnectToDB } from "../database/config/mongodb";
import app from "./app";



const startServer = ()=>{

    const PORT = process.env.PORT || 2000

    ConnectToDB()

    app.listen(PORT,()=>{
        console.log(`app is running on port ${PORT}`)
    })
}

startServer()