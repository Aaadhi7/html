const users = require('../db/models/users');
const  sucess_function  = require('../utils/response-handler').sucess_function;
const  error_function= require('../utils/response-handler').error_function;

async function createUser(req, res) {
    try {
        const datas = req.body;

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

        //save to database
        

        let new_user = await users.create(datas);

        if (new_user) {
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

async function getUserData() {

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