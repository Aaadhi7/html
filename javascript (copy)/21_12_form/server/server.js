
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');
const fs = require('fs');
const queryString = require('querystring');
const { error } = require('console');
const {MongoClient}= require('mongodb');

const client = new MongoClient("mongodb://127.0.0.1:27017");

const server = http.createServer(async(req, res) => {

  //acess the database and collections
  const db =  client.db ('ums');
  const collection = db.collection("users");
 
  //Get the req url
  const reqUrl = req.url;
  console.log("reqUrl : ",reqUrl);

  //parse req url 
  const parsedUrl = url.parse(reqUrl);
  console.log("parsedUrl : ",parsedUrl);

//if url path is '/' (rootpath) server html
if(parsedUrl.pathname == '/'){
  res.writeHead(200,{'content-Type' : 'text/html'});
  res.end(fs.readFileSync('../client/index.html'))

}else if(parsedUrl.pathname === '/add_user.html'){
  res.writeHead(200, {"content-Type" : 'text/html'});
  res.end(fs.readFileSync('../client/add_user.html'))

}
else if(parsedUrl.pathname === '/get_user.html'){
  res.writeHead(200, {"content-Type" : 'text/html'});
  res.end(fs.readFileSync('../client/get_user.html'))

}
else if(parsedUrl.pathname === '/style.css'){
  res.writeHead(200, {"content-Type" : 'text/css'});
  res.end(fs.readFileSync('../client/style.css'))

}
else if(parsedUrl.pathname === '/script.js'){
  res.writeHead(200, {"content-Type" : 'text/javascript'});
  res.end(fs.readFileSync('../client/script.js'))

}


//handle from submission on POST Rrequest to /submit
if(req.method === 'POST' && parsedUrl.pathname === '/submit'){


  
  let body='';
  //collect data as it come in chunks
  req.on('data', (chunk)=> {
    console.log("chunks : ",chunk);
    console.log("chunk.toString() :", chunk.toString());
    body = body + chunk.toString();
    //console.log("body :",body);
  });

//process the form data on end of request
req.on('end',async()=> {
  console.log("body :",body);
  const formData = queryString.parse(body);
  console.log('forData :', formData);


//do someting with submitted data
console.log(`fname : ${formData.fname},
lname : ${formData.lname},
email : ${formData.email},
password : ${formData.pass}
uname : ${formData.uname},
age : ${formData.age},
adress : ${formData.add},
phoneno : ${formData.phn}`);


//save to database
//insert the data into collection
await collection.insertOne(formData)
.then((message)=> {
  console.log("Document inserted succesfully",message);

})
.catch((error)=>{
  console.log("database iserted error :",error.message?error.message:error)
})
});
//send a response
res.writeHead(200,{'Content-Type' : 'text/plain'});
res.end("form data submitted successfully!");

}



if (req.method == 'GET' && parsedUrl.pathname ==='/getData'){
  console.log("reachedHere")
  const formData = collection.find();
  console.log("formData :",formData);

  const formDataArr = await formData.toArray();
  console.log("formDataArr :",formDataArr);

  let jsonFormData = JSON.stringify(formDataArr);
  console.log("jsonFormData : ",jsonFormData);

  res.writeHead(200,{"content-Type" : "text/json"});
  res.end(jsonFormData);

}

});


async function connect(){
  await client.connect()
  .then((messge)=>{
    console.log("Database connection established");

  })
  .catch((error)=>{
    console.log("Database error :",error.message?error.message:error);
  })
  .finally(()=>{
    server.listen(port,()=>{
      console.log(`server running at http://localhost:3000`)
    })
  });
}

connect();

