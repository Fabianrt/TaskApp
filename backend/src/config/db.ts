import mongoose from "mongoose"
import color from 'colors'
import {exit} from 'node:process'


export const DBConnection = async() => {
  try {
    const connection = await mongoose.connect(process.env.STRING_MONGO_CONNECTION)
    console.log(color.bgGreen(`Conexion exitosa en ${connection.connection.host}:${connection.connection.port}`))
  } catch (error) {
    console.log("error de conexion:", color.bgRed.white(error.message))
    exit(1)
  }
}

