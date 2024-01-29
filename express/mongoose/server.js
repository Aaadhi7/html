const express = require('express');
const app = express();
const mongoose =  require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },

});

const model = mongoose.model("users",schema);

app.get('/test',(req,res)=>{
    res.status(200).send("Test succesfully")

});

app.post('/submit',async (req,res)=> {
    try {
        const datas = req.body;
        console.log('datas : ',datas);
        const new_datas =await model.create (datas);
        
        if(new_datas){
            console.log("Datas inserted successfully : ",new_datas);
            res.status(201).send('sucess');

        
        }else{
            res.status(400).send("failed");

        }
    } catch (error) {
        console.log("error :",error);
        req.status(400).send("failed");
        
    }
})

function connect(){
    try {
        let conn = mongoose.connect(process.env.MONGODB_URI);
        if(conn){
            console.log("conn :",conn);
            console.log("database connection established");

        }else{
            console.log("conn : ",conn);
            console.log("Database connection not estsblished");

        }
        
    } catch (error) {

        console.log("Database connection error :",error);

        
    }finally{
        app.listen(process.env.PORT,()=>{
            console.log(`server running at http://localhost:${process.env.PORT}`);

        });
    }
}
connect();
