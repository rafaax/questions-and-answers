const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/:user", (req, res) => {

    var user = req.params.user
    var nacionality = req.query['from']
    var img = req.query['img']

    console.log(img)

    var info = [
        {age: 20, unit: 'year'},
        {height:  169, unit: 'centimeters'},
        {weight: 154, unit: 'pounds'}
    ]


    res.render("home", {
        user: user,
        from: nacionality, 
        info: info,
        img: img
    })
})

app.listen(8080, () => {
    console.log('...')
})