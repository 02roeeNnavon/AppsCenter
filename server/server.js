const express = require('express');
const { nanoid } = require("nanoid");
const { getAll,add } = require('./queries.js');
const app = express()
app.use(express.json());
const cors=require("cors");
app.use(cors('*')) // Use this after the variable declaration

app.get('/api/apps',(req,res) => {
    const result = getAll()
    result.then((data) => {res.send(data.rows)})
})

app.post('/api/apps',(req,res) => {
    let body = req.body;
    console.log(body);
    const payload = [nanoid(),body.imageUrl,body.name,body.price,body.description,body.companyName,new Date()];
    const result = add(payload);
    result.then((data) => {res.send(data.rows)});
})

const port = process.env.PORT || 3000;
app.listen(port,()=> {console.log(`listening on port ${port}`);})