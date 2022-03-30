import express from 'express'

const port = 3002

const app = express()
app.set('view engine', 'ejs') //trocando(set) a enginição pelo ejs

app.listen(port, (req , res) => {
    console.log(`Rodando na porta https://localhost:${3002}`)
})

