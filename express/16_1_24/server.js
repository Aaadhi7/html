const express = require('express');

const app = express();
let {MongoClient} = require('mongodb');
let dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const client = new MongoClient('mongodb://localhost:27017');
const db = client.db('todo');
const collection = db.collection("users");


console.log("__dirname : ",__dirname);
app.use('/',express.static(__dirname + '/client'));
app.use(express.urlencoded({extended : false}));

app.get('/test',(res,req)=>{
    res.status(200).send("sucess")

});

app.post('/submit',(req,res)=> {
    console.log("reached here");
    console.log("req body : ",req.body)
})

// app.listen(port,()=>{
//     console.log(`server running at http://localhost:${port}`)
// });



async function connect(){
    await client.connect()
    .then((messge)=>{
      console.log("Database connection established");
  
    })
    .catch((error)=>{
      console.log("Database error :",error.message?error.message:error);
    })
     .finally(()=>{
      app.listen(port,()=>{
        console.log(`server running at http://localhost:5000`)
      })
     });
  }
  
  connect();