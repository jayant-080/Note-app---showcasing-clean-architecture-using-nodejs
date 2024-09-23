import express from 'express'
import dotenv from 'dotenv'
import noteRoute from '../route/NoteRoute'


const app = express()
app.use(express.json())

dotenv.config()

app.use('/',noteRoute)


export default app