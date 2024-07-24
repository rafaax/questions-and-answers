const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("/:user", (req, res) => {

    var user = req.params.user
    var nacionatility = req.query['from']

    var info = [
        {age: 20, unit: 'year'},
        {height:  169, unit: 'centimeters'},
        {weight: 154, unit: 'pounds'}
    ]


    res.render("home", {
        user: user,
        from: nacionatility, 
        info: info
    })
})

app.listen(8080, () => {
    console.log('...')
})