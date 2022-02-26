const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
// app.use(express.static(__dirname +'/views'))
app.set('views', './views')
app.set('view engine', 'ejs')

const users = [{
    name:"Deekshith D V",
    email:"deexith2016@gmail.com"
    },
    {
        name:"Robert",
        email:"robert@gmail.com"
    }
]

app.get('/',(req,res)=>{
    res.render("index.ejs",{users})
})

app.get('/form',(req,res)=>{
    res.render("form.ejs")
})

app.post('/user/add',(req,res)=>{
    users.push({
        name:req.body.name,
        email:req.body.email
    })
    res.redirect('/')
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})
