const express = require ('express')
const app = express();
const {MongoClient,ObjectId}= require('mongodb');
const client = new MongoClient("mongodb://localhost:27017");
const port = 5000;

const db =  client.db ('users');
const  collection = db.collection("user_coll");

console.log("__dirname:",__dirname);
app.use(express.static(__dirname + "/client"));
// app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get(`/test`,(req,res,next)=>{

   // res.status(200).send("sucess");
   next();

},(req,res,next)=> {

// res.status(200).send("sucess1");
 next()

},(req,res,next)=>{

   res.status(200).send("sucess2");    

})





app.post('/submit',async(req,res)=>{
let body = req.body;
console.log("body:", body);

await collection.insertOne(req.body)
.then((message)=> {
  console.log("Document inserted succesfully",message);

})
.catch((error)=>{
  console.log("database iserted error :",error.message?error.message:error)
})

res.status(200).send("success")
});




app.get('/getData',async(req,res) => {

  const formData = collection.find();
  console.log("formData : ",formData);

  const formDataArr = await formData.toArray();
  console.log("formDataArr : ",formDataArr);

  let jsonFormData = JSON.stringify(formDataArr);
  console.log("jsonFormData : ",jsonFormData);




   res.status(200).send(jsonFormData)
});




app.put('/editData',async(req,res)=>{

  let data = req.body;
  console.log("data:",data);
  

  let finalData = {
    name : data.name,
    email : data.email,
    password : data.password,
  }

  let id = data.id;
  console.log("id : ",id);
  console.log("typeOf(id) : ",typeof(id));

  let _id = new ObjectId(id);
  console.log("_id : ",_id);
  console.log("typeOf(_id) : ",typeof(_id));


  await collection.updateOne({_id},{$set : finalData})
  .then((message)=>{
    console.log("message : ",message);
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.end("success");
  })
  .catch((error)=>{
    console.log("error : ",error);
    res.writeHead(400,{"Content-Type" : "text/plain"});
    res.end("failed");
  })
  

})



 app.delete('/deleteData',async(req,res)=>{
    let data = req.body;
    console.log("data :",data)
    
    let finalData = {
      name : data.name,
      email : data.email,
      password : data.password,
    }

    let id = data.id;
    console.log("id : ",id);
    console.log("typeOf(id) : ",typeof(id));

    let _id = new ObjectId(id);
    console.log("_id : ",_id);
    console.log("typeOf(_id) : ",typeof(_id));

    

    await collection.deleteOne({_id},{$set : finalData})
    .then((message)=>{
      console.log("message : ",message);
      res.writeHead(200,{"Content-Type" : "text/plain"});
      res.end("deleted");
    })
    .catch((error)=>{
      console.log("error : ",error);
      res.writeHead(400,{"Content-Type" : "text/plain"});
      res.end("failed");
    })
    
  })


    
  

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