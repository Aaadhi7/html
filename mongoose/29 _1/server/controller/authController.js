let sucess_function = require('../utils/response-handler').sucess_function;
let error_function = require('../utils/response-handler').error_function;
let user = require('../db/models/users');
let jwt = require('jsonwebtoken');
let dotenv = require('dotenv');
dotenv.config();
let bcrypt = require('bcrypt')

exports.login = async function (req,res){
    try {
        let email = req.body.email;
        console.log("email : ",email);

        let password = req.body.password ;
        console.log("password : " ,password);

        if(!email) {
            let response = error_function({
                statusCode : 400,
                meassage : "Email is required",
            });
            res.status(response.statusCode).send(response);
            return;
        }

        if(!password) {
            let response = error_function({
                statusCode : 400,
                meassage : "Password is required",


            });
            res.status(response.statusCode).send(response);
            return;
        }

        let user = await users.findOne({email});
        console.log("users : ",user);

        if (user) {
            let db_password = user.password;
            console.log("db_password : ",db_password);

            bcrypt.compare(password, db_password,(err,auth) =>{

            if(auth === true ){
                //openssl genpkey - algorithm RSA -outprivate_key.pem -aes256
                let access_token = jwt.sign({user_id : user.user_id},process.env.
                    PRIVATE_KEY,{expiresIn : "id"});
                    console.log("access_token : ",access_token);

                    let response = sucess_function({
                        statusCode : 200,
                        data : access_token,
                        meassage : "Login successful",
                    });
                    res.status(response.statusCode).send(response);
                    return;
            } 
      
          else{
                let response = error_function({
                    statusCode : 404,
                    meassage : "Invalid password",
    
    
                });
                res.status(response.statusCode).send(response);
                return;
            }
        })
        }  else{
            let response = error_function({
                statusCode : 404,
                meassage : "user not found",


            });
            res.status(response.statusCode).send(response);
            return;
        }

        
    } catch (error) {
        console.log("error : ",error);
        let response = error_function({
            statusCode : 400,
            meassage : error.meassage ? error.meassage : error,

        });
        res.status(response.statusCode).send(response);
        return;
        
    }
}

