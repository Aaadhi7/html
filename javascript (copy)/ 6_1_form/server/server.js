const http = require('http');
const hostname = '127.0.01';
const port = 3000;
const url = require('url');
const fs = require('fs');
const queryString = require('querystring');
const {error} = require ('console');
const {Mongoclient} = require('mongodb');

const client = new Mongoclient("mongodb://127.0.0.1:27017");

const server = http.createServer((req,res) =>{

    const db = client.db('brand');
    const collection = db.collection("products");

    const reqUrl = req.url;
    console.log("reqUrl : ",reqUrl);

    const parsedUrl = url.parse(reqUrl);
    console.log("parsedurl : ",parsedUrl);

    if (parsedUrl.pathname == '/'){
        res.writeHead(200,{"content-Type" : 'text.html'});
        res.end(fs.readFileSync('../client/style.css'))
    }

    if(req.method === 'POST' && parsedUrl.pathname === '/submit'){
        let body='';

        req.on('data',(chunk)=> {
            console.log("chunks : ",chunk);
            console.log("chunk.string() :",chunk.tostring());
            body = body + chunk.tostring();
        });

        req.on('end',async()=> {
            console.log("body :",body);
            const formData = queryString.parse(body);
            console.log('forData :', formData);

            console.log(`productname : ${formData.productname},
            productnumber : ${formData.productno},
            brand : ${formData.brand},
            model : ${formData.model},
            color : ${formData.color}`);

            await collection.insertOne(formData)
.then((message)=> {
  console.log("Document inserted succesfully",message);

})
.catch((error)=>{
  console.log("database iserted error :",error.message?error.message:error)
})
});

res.writeHead(200,{'Content-Type' : 'text/plain'});
res.end("form data submitted successfully!");

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

            

          