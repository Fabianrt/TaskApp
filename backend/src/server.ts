import express from "express";
import dotenv from 'dotenv'
import { DBConnection } from "./config/db";

dotenv.config()
DBConnection()

const app = express()
export default app