// //1

// function double(arr){
//     let doublearr=arr.map((value,index)=>{
//         return value*2 ;

//     });
//     return doublearr;
// }
// let doubleArr = double([2,5,7,8]);
// console.log("double array :",doubleArr);


console.log(this);
let obj = {
    name : "jhon",
    getAge : function () {
        console.log(this);
    }
}
console.log(obj.name);
console.log(obj.getAge());

function greet (message,message1) {
    console.log("message :",message);
    console.log("message1 :",message1);

    console.log("this :",this);
    console.log("name :",this.name);
}
greet("hello");
//call method
greet.call(obj,"hello","hello1");

//bind method

let boundGreet = greet.bind(obj,"hello","hello1");
console.log("boundGreet :",boundGreet);
boundGreet();

//apply method
greet.apply(obj,["hello","hello1"]);