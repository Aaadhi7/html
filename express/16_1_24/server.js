const express = require('express');
const { status } = require('express/lib/response');
const app = express();
const port = 5000;

console.log("__dirname : ",__dirname);
app.use('/',express.static(__dirname + '/client'));

app.get('/test',(res,req)=>{
    res.status(200).send("sucess")
});

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
});

