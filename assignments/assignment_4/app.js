const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Task = require("./model/todo")

const app = express()
mongoose.connect('mongodb://localhost:27017/todos');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(methodOverride('_method'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/',async(req,res)=>{
    const tasks = await Task.find()
    res.render("index.ejs",{tasks})
})

app.get('/form',(req,res)=>{
    res.render("form.ejs")
})

app.post('/users/add',async(req,res)=>{
    await Task.create({
        name: req.body.name,
        email:req.body.email
    })
    res.redirect('/')
})

app.put("/users/:id/edit", async (req, res) => {
    await Task.updateOne({_id: req.params.id}, {isPromoted : true})
    res.redirect("/");
})

app.delete("/users/:id/delete",async(req,res)=>{
    await Task.deleteOne({_id: req.params.id})
    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})