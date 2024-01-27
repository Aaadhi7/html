const express = require('express');
const app = express();
let {MongoClient,ObjectId} = require('mongodb');
const path = require('path')
const fs = require('fs')
let dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

app.use(express.static(__dirname + '/../client'));
app.use(express.json());

app.get('/test',(req,res)=>{
    res.status(200).send("Success");
});

app.get('/getData',(req,res)=>{

  const formData = folderPath.find();
    console.log("formData :", formData);

    const formDataArr = formData.toArray();
    console.log("formDataArr :",formDataArr);

    let jsonFormData = JSON.stringify(formDataArr);
    console.log("jsonFormData :", jsonFormData);

    res.status(200).send(jsonFormData);
  
})


app.post('/submit',(req,res)=>{
   const datas = req.body;
   console.log("datas : ",datas)
   
   let folderPath = "./datas";
   let fileName = "datas.json";
   let filePath = path.join(folderPath,fileName);

   let datasArr= [];
   datasArr.push(datas);

   let jsonDataArr = JSON.stringify(datasArr);
   
   if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath,{recursive : true});
   }
      
   fs.writeFile(filePath,jsonDataArr, (err)=>{
    if(err){
      console.log("err : ",err);
      res.status(400).send('failed')
    }else {
      console.log("success");
      res.status(201).send('success')

    }
   })


});

app.get('/getData',(req,res)=>{

  const formData = folderPath.find();
    console.log("formData :", formData);

    const formDataArr = formData.toArray();
    console.log("formDataArr :",formDataArr);

    let jsonFormData = JSON.stringify(formDataArr);
    console.log("jsonFormData :", jsonFormData);

    res.status(200).send(jsonFormData);
  
})


app.listen(PORT,() =>{
  console.log(`Server running at http://localhost:${PORT}`)
})