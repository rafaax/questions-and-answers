const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/:user", (req, res) => {

    res.render("home", {
        user: req.params.user
    })
})

app.get("/:user/form", (req, res) => {

    res.render("form", {
        user: req.params.user
    })
})

app.listen(8080, () => {
    console.log('...')
})