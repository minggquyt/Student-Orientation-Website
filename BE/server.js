const express = require('express');
const bodyparser = require('body-parser')
const app = express(); 

const port = 3000;

app.get('/',(req,res) => {
    res.send("Hello world");
})

// Body-parser middleware - CẤU HÌNH BODY PARSER - TÌM HIỂU DÒNG NÀY
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.post('/saveData',(req,res)=> {
    console.log("Using body parser: ",req.body.account);
    res.send("submit okay");
})

app.listen(port,() => {
    console.log("Node App is running on port 3000 ");
})  


