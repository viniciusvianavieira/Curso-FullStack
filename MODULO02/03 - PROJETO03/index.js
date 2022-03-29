const express = require('express')
const app = express()


app.set("view engine","ejs") //settar uma view engine ejs, ou seja, falando que temos ejs e conectando

app.get('/',(req, res) => { 
  res.render('index') //pedindo para renderizar o index
}) //criando um servidor localhost com endereço /

app.get("/home", (req,res) => {
  res.send('Hello Worldzin')
}) //criando um servidor localhost com endereço /home e abrindo um ejs que esta dentro da pasta views, ele ja reconhece de cara o arquivo "index" por ser expresss

app.listen(3000,() => console.log("Servidor rodando em http://localhost:3000") ) //colocando uma mensagem como callback para informar onde o servidor 


// npm init
// instalar o nodemom (npm i nodemon)
// mudar script ("start:" e "dev:")
// instalar o express (npm i express)
// abrir a pagina no google (npm express) copiar o padrão
// npm run dev (abrir o servidor)
// htttp://localhost:"3000"
// instalar o ejs (npm i ejs)