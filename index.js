const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("/:user", (req, res) => {

    var user = req.params.user
    var nacionatility = req.query['from']


    res.render("home", {
        user: user,
        from: nacionatility
    })
})

app.listen(8080, () => {
    console.log('...')
})