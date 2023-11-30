console.log()
// //anonymous functions
// const printHai = function () {
//     console.log("Hai")

// };

// printHai();

// //Arrow function
// const printWelcome = () => {
//     console.log("Welcome");
// };
// printWelcome();

//math functions
// console.log(math.sqrt(16));
// console.log(math.round(10.4));
// console.log(math.ceil(10.2))


// {
//     //TIMER FUNCTION
//   setTimeout(function (){
//     console.log("From SetTimeOut...");
//     alert("From setTimeOut")
//   },3000)
// }

// setInterval(function(){
//     console.log("From setInterval")
// },3000
// );

// function putZero(sec){
//     return sec < 10 ? "0" + sec : sec ;

// }
//  function show(){
//     var time = document.getElementById('time');
//     var dt = new Date();
//     var hours = gt.gethours();
//     var ampm =  hours >12?"pm":"am";
//     time.innerHTML = putZero(hours%12) + ":" + putZero(dt.getMinutes())+":"+putZero(dt.getSeconds())+ampm;
//     setTimeout(function(){
//         show();
//     },1000);


//  }
//  show();




//spread operator
 let arr = [1,2,3,4,5,6];
 console.log("arr",arr);

 let arr1 = [...arr,7,8,9];
 console.log("arr1",arr1);

 let obj = {
  firstname : "abin",
  lastname : "sasikumar",
 }
 console.log("obj",obj);
  let obj1 = {...obj,}
  console.log("obj1 :",obj1,)




  // //destruring
  // const [a,b,c,d,e] = arr;
  // console.log("a :",a);
  // console.log("b :",b);


  // const {firstname,lastname,age} = obj;
  // console.log("firstname :",firstname);
  // console.log("lastname :",lastname);



  //nested destruing


  const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
  const [firstRow,secondRow,thirdRow] = matrix;

  const [a,b,c] = firstRow;
  const [d,e,f] = secondRow;
  const [h,i,j] = thirdRow;

  console.log("a :",a);
  console.log("b :",b);
  console.log("c :",c);
  console.log("d :",d);
  console.log("e :",e);
  console.log("f :",f);
  
  console.log("h :",h);
  console.log("i :",i);
  console.log("j :",j);



  const person ={ 
    Name : "john",
    age : 30,
    adress : {
      zipcode : '1001',
      city : "newyork"
    }
  }
  const{Name,age,adress : {zipcode , city}}=person;

console.log( "name :",Name);
console.log("age :",age);

