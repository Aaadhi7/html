
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');
const fs = require('fs');
const queryString = require('querystring');
const server = http.createServer((req, res) => {
 
  //Get the req url
  const reqUrl = req.url;
  console.log("reqUrl : ",reqUrl);

  //parse req url 
  const parsedUrl = url.parse(reqUrl);
  console.log("parsedUrl : ",parsedUrl);

  //if url path is '/' server html

if(parsedUrl.pathname == '/'){
  res.writeHead(200,{'content-Type' : 'text/html'});
  res.end(fs.readFileSync('../client/index.html'))

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
req.on('end',()=> {
  console.log("body :",body);
  const formData = queryString.parse(body);
  console.log('forData :', formData);


//do someting with submitted data
console.log(`fname : ${formData.fname},
lname : ${formData.lname},
email : ${formData.email},
password : ${formData.pass}
uname : ${formData.uname},
adress : ${formData.add},
phoneno : ${formData.phn}`)
});

//send a response
res.writeHead(200,{'Content-Type' : 'text/plain'});
res.end("form data submitted successfully!");

}

});
server.listen(port, () => {
  console.log(`server running at http://localhost:3000`);
});
