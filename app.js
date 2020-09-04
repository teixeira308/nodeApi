const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let itens = []

app.get('/', (req, res) => {
    res.json(itens)
    console.log(`Received GET at http://localhost:${port}`)
})

app.post('/',(req,res) => {
    res.send(`criando dados: ${req.body.name}`)
    itens.push(req.body.name)
    console.log(`Received POST at http://localhost:${port}`)
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})