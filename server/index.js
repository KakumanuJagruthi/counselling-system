const express = require('express')
const mongoose = require("mongoose");
const bookController = require("./controllers/books");
mongoose
"    connect(mongodb://localhost:27017/s4",)
const cors= require('cors')
const {MongoClient} = require('mongodb')
const app=express()
app.use(cors())
app.use(express.json())
const client=new MongoClient('mongodb+srv://Admin:Admin@cluster0.hzkrxcu.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db=client.db('counselling2')
const col=db.collection('register')
col.insertOne({'student':'345'})
app.post('/register', (req, res)=>{
    col.insertOne(req.body)
    console.log(req.body)
    res.send("data inserted successfully")
})
app.get('/retrieve',async (req,res) =>{
    const result=await col.find().toArray()
    console.log(result)
    res.send(result)

})
app.get('/', (req, res)=>{
    res.send('<h1>Hello KLU</h1>')
})
app.get('/about', (req,res)=>{
    res.send('<h1>This is about page</h1>')
})
app.get('/contact', (req,res)=>{
    res.send('<h1>This is contact page</h1>')
})

app.listen(8080, ()=>{console.log('Express server is running')})