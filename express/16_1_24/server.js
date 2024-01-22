const express = require('express');

const app = express();
let { MongoClient, ObjectId } = require('mongodb');
let dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const client = new MongoClient('mongodb://localhost:27017');
const db = client.db('todo1');
const collection = db.collection("users1");

//Test route

app.get('/test', (req, res, next) => {
  next();
}, (req, res, next) => {
  next();
}, (req, res) => {
  console.log("success2");
  res.status(200).send("success2")
})



console.log("__dirname : ", __dirname);
app.use('/', express.static(__dirname + '/client'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get('/test', (res, req) => {
  res.status(200).send("sucess")

});

app.post('/submit', async (req, res) => {
  await collection.insertOne(req.body)
    .then((message) => {
      console.log("document inserted successfully", message);
      res.status(201).send("succcess");

    })
    .catch((error) => {
      console.log("document insertion failed:", error);
      res.status(400).send("failed");

    });

});

app.get('/getData', async (req, res,) => {
  const data = collection.find();
  const dataArr = await data.toArray();
  
  let json_data = JSON.stringify(dataArr);
  res.status(200).send(json_data);

});

app.put('/editData', async (req, res) => {

  let data = req.body;
  console.log("data : ", data);

  let id = data.id;
  console.log("id :", id);
  console.log("typeof(id) :", typeof (id));

  let _id = new ObjectId(id);
  console.log("_id", _id);
  console.log("typeof(_id) :", typeof (_id));

  let upadateDatas = {
    date: data.date,
    time: data.time,
    tasks: data.tasks,
    top: data.top,
  }


  await collection.updateOne({ _id }, { $set: upadateDatas })

    .then((message) => {
      console.log("message : ", message);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("success");

    })
    .catch((error) => {
      console.log("erorr :", error);
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("failed");


    })
});
app.delete('/deleteData', async (req, res) => {

  let data = req.body;
  console.log("data : ", data);

  let id = data.id;
  console.log("id :", id);
  console.log("typeof(id) :", typeof (id));

  let _id = new ObjectId(id);
  console.log("_id", _id);
  console.log("typeof(_id) :", typeof (_id));

  let deleteDatas = {
    date: data.date,
    time: data.time,
    tasks: data.tasks,
    top: data.top,
  }


  await collection.deleteOne({ _id }, { $set: deleteDatas })
    .then((message) => {
      console.log("message : ", message);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("success");

    })
    .catch((error) => {
      console.log("erorr :", error);
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("failed");


    })
});



// app.listen(port,()=>{
//     console.log(`server running at http://localhost:${port}`)
// });



async function connect() {
  await client.connect()
    .then((messge) => {
      console.log("Database connection established");

    })
    .catch((error) => {
      console.log("Database error :", error.message ? error.message : error);
    })
    .finally(() => {
      app.listen(port, () => {
        console.log(`server running at http://localhost:5000`)
      })
    });
}

connect();