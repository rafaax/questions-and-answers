const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("", (req, res) => {

    let user = "bORZ"
    res.render("home", {
        user: user
    })
})

app.listen(8080, () => {
    console.log('...')
})