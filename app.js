const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log(`Received GET at http://localhost:${port}`)
})

app.post('/',(req,res) => {
    res.send("post");
    console.log(`Received POST at http://localhost:${port}`)
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})