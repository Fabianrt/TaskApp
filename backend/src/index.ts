import server from './server'
import color from 'colors'

const port = process.env.PORT || 4000
server.listen(port, ()=>{
    console.log(color.bold.bgGreen(`Escuchando en el puerto: ${port}`))
})