import printHello,{ printHello1,printHello2,printHai } from "./script1.js";
printHello();


printHello1();
printHello2();
printHai();




//using promises

function finduser2(userId){
    console.log("userid : ",userId);
   return new Promise((resolve,reject) => {
        //involking an ansynchronus operation
         setTimeout(()=>{

             let userInfo = [{
                 id:1,
                 name: "john",
                age : 30,
            },
            {
             id:2,
             name: "jane",
            age : 25,
         }
        ];
        let user = userInfo.find(() => userInfo.id ==userId);

         })
     })
 }


// api.createOrder(()=>{
//     api.payment(()=>{
//         api.orderSuccess();
//     });
// });



//using async await
async function getData(){
    try{
    let userData = await findUser2(2);
    console.log("userdata :" , userData);
}catch(error){
    console.log("error :" ,error)
}
}
getData();