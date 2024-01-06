const http = require('http');
const hostname = '127.0.01';
const port = 3000;
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');
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
})