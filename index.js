
const express = require('express')
const port = 8000
const app = express()
let ejs = require('ejs')
app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views','views')


var contactList = [
    {
        name: "Rio",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Richard",
        phone: "12131321321"
    }
]

app.get('/',(req,res) => {
    res.render('index',{
        title:"project",
        list:contactList
    })
})

app.get('/project',(req,res) => {
    res.render('index',{
        title:"project",
        user:{
            name:"kajal",
            course:"full stack"
        }
    })
})
app.listen(port)
console.log('express server is running @',port);