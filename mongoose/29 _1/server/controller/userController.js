const users = require('../db/models/users');
const  sucess_function  = require('../utils/response-handler').sucess_function;
const  error_function= require('../utils/response-handler').error_function;
const bcrypt = require('bcrypt');
const checkLogin = require('../utils/checkLogin').checkLogin_function;
async function createUser(req, res) {
    try {
        const datas = req.body
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.passsword;

        //validation

        let userFound = await users.findOne({email : datas.email});

        if(userFound){
            let response = error_function({
                statusCode : 400,
                message : "user already exist",

            });
            res.status(response.statusCode).send(response);
            return;
        }
        //Hashing password

        let salt =  await bcrypt.genSalt(10);
        console.log("salt :",salt);

        let hashed_password = bcrypt.hashSync( password , salt);
        console.log("hashed_password :",hashed_password);

        

        //save to database
        

        let new_user = await users.create({
            name,
            email,
            password : hashed_password,
        });

        if (new_user) {

            let response_datas = {
                _id :new_user._id,
                name : new_user.name,
                email : new_user.email,
            }
            console.log("new_user : ",new_user);
            let response = sucess_function({
                statusCode : 201,
                data : new_user,
                message : "user created suceessfully"
            })

            res.status(response.statusCode).send(response);
            return;
        } else {
            let response = error_function({
                statusCode : 400,
               
                message : "user creation failed"
            })

            res.status(response.statusCode).send(response);
            return;
        }

    } catch (error) {
        console.log("error : ", error);
        let response = error_function({
            statusCode : 400,
           
            message : "something went wrong"
        })

        res.status(response.statusCode).send(response);
        return;
    }

}

const User = require('./models/User'); 
const checkLogin = require('./checkLogin');

const getData = (req, res) => {
    // You can access userId from req object
    const userId = req.userId;

    // Example usage: Fetch user data
    User.findById(userId, (err, user) => {
        if (err || !user) {
            return res.status(404).json({ message: 'User not found' });
        } else {
            // User found, perform desired actions
            res.json({ user });
        }
    });
};

module.exports = {
    getData
};

async function getUserData(req,res) {
    try {
        const datas = req.body;

    
        
    } catch (error) {
        
    }

}




async function updateUser() {

}

async function deleteUser() {

}



module.exports = {
    createUser,
    getUserData,
    updateUser,
    deleteUser,
}

