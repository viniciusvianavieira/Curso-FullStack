import express from 'express'
import { routes } from './src/routes/routes.js'
import path from 'path'
 
const port = 3002
const app = express()
const __dirname = path.resolve(path.dirname('')) //reconhecendo as pastas do lado de forma

app.use(routes)

app.set('view engine', 'ejs') //trocando(set) a enginição pelo ejs
app.use(express.static(path.join(__dirname,'public'))) //fazer com que o express reconheça as outras pastas
app.listen(port, (req , res) => {
    console.log(`Rodando na porta localhost:${port}`)
})
