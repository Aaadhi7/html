const express = require('express');
const app = express();
let { MongoClient} = require('mongodb')
let dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT;

const client = new MongoClient('mongodb://localhost:27017');
const db = client.db('password');
const collection = db.collection("pass");

app.use('/', express.static(__dirname + '/client'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/test', (req, res) => {
  res.status(200).send("Success");
});

app.post('/submit', async (req, res) => {


  await collection.insertOne(pass.value)
    .then((message) => {
      console.log("document insertion successull", message);
      res.status(201).send("Success");
    })
    .catch((errors) => {
      console.log("document insertion failed", errors);
      res.status(400).send("Failed");
    })
});


// app.get('/getData', async (req, res) => {

//     const formData = collection.find();
//     console.log("formdata : ", formData)
  
//     const formDataArr = await formData.toArray();
//     console.log("formDataArr : ", formDataArr);
  
//     let jsonFormData = JSON.stringify(formDataArr);
//     console.log("jsonFormData : ", jsonFormData);
  
//     res.status(200).send(jsonFormData);
  
//   });
  

async function connect() {
    await client.connect()
      .then((message) => {
        console.log("database connection established");
      })
      .catch((error) => {
        console.log("database is not connected");
        console.log("database error : ", error.message ? error.message : error);
      })
      .finally(() => {
        app.listen(port, () => {
          console.log(`server running at http://localhost:5000`);
        })
      });
  }
  
  connect();