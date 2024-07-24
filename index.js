const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("", (req, res) => {
    res.send('GET')
})

app.listen(8080, () => {
    console.log('SERVER INICIADO')
} )