import express from "express";
import dotenv from 'dotenv'
import { DBConnection } from "./config/db";
import projectRoutes from './routes/projectRoutes'

dotenv.config()
DBConnection()

const app = express()

//Routes
app.use(express.json())
app.use('/api/projects', projectRoutes)

export default app