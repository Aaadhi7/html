const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const connect = require('./db/config');
const userRoutes = require('./routes/userRoutes');

app.use(cors());

app.use(express.json());


app.use(express.static(__dirname + "/../client"));

app.use(express.urlencoded({extended : false}));
app.use(userRoutes);
//Database connection
connect();
app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
});