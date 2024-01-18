const express = require('express');

const app = express();
let {MongoClient,ObjectId} = require('mongodb');
let dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const client = new MongoClient('mongodb://localhost:27017');
const db = client.db('todo');
const collection = db.collection("users");

//Test route

app.get('/test', (req,res,next)=>{
  next();
 },(req,res,next)=>{
   next();
}, (req,res)=>{
   console.log("success2");
   res.status(200).send("success2")
 })


console.log("__dirname : ",__dirname);
app.use('/',express.static(__dirname + '/client'));
app.use(express.urlencoded({extended : false}));
app.use(express.json())

app.get('/test',(res,req)=>{
    res.status(200).send("sucess")

});

app.post('/submit',async(req,res)=> {
    console.log("reached here");
    console.log("req body : ",req.body);

    await collection.insertOne(req.body)
    .then((message)=> {
     console.log("document inserted successfully");
     res.status(201).send("succcess");

    })
    .catch((error)=>{
     console.log("document insertion failed");
     res.status(400).send("failed");
  
     });

});

app.get('/getData',async (req,res,)=>{
  const formData = collection.find();
  console.log("formData :",formData);

  const formDataArr = await formData.toArray();
  console.log("formDataArr :",formDataArr);

  let jsonFormData = JSON.stringify(formDataArr);
  console.log("jsonFormData : ",jsonFormData);


  res.status(200).send(jsonFormData);
  
});

app.put('/editData',async (req,res)=> {

  let data = req.body;
  console.log("data : ",data);

    let id = data.id ;
    console.log("id :",id);
    console.log("typeof(id) :",typeof(id));

    let _id = new ObjectId(id);
    console.log("_id",_id);
    console.log("typeof(_id) :" ,typeof(_id) );

    let upadateDatas = {
      date : data.date,
      time : data.time,
      tasks : data.tasks,
      top : data.top,
    }


    await collection.updateOne({_id},{$set  : upadateDatas})
     .then((message)=> {
      console.log("document updated succesfully");
      
      res.status(200).send("success");

     })
     .catch((error)=>{
      console.log("document not uodated",error);
     
      res.status(400).send("failed");
      

     }) 
  });



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