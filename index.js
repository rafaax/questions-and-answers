const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/:user", (req, res) => {

    res.render("home", {})
})

app.listen(8080, () => {
    console.log('...')
})