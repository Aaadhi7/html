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


//
let obj1= {
    name : "harry",
    age : 30,
    greeting : function (){
        console.log("name :" ,this.name);
        console.log("age :",this.age);
    }
}
obj1.greeting();



//constructor functions

function person(name,age) {
    this.name = name;
    this.age = age ;
    this.greeting = function() {
        console.log("name :",this.name);
        console.log("age : ",this.age);
    }
}
const person1 = new person("jhon",30);
console.log("person1 :",person1);
person1.greeting();

const person2 = new person("abingay",21);
console.log("person2 :",person2);
person2.greeting();


{

    let obj = {
        name : "mcLaren gt",
        brand : "mcLaren",
        model : "gt",
        price : "80 lakh",
        color : "black,white",

        cars : function (){

            console.log("name :",this.name);
            console.log("brand :",this.brand);
            console.log("model :",this.model);
            console.log("price :",this.price);
            console.log("color :",this.color);

        }
    } 
    console.log("obj :",obj);

    obj.cars();



     function car (name,brand,model,price,color){
        this.name = name;
        this.brand = brand ;
        this.model = model;
        this.price = price ;
        this.color = color;
         this.cars = function(){
            console.log("name :",this.name);
            console.log("brand :",this.brand);
            console.log("model :",this.model);
            console.log("price :",this.price);
            console.log("color :",this.color);

         }

     }
     const car1 = new car("BNW 7 series","BNW","7 series","1.7 cr","white,black,");
     console.log("car1 :" ,car1);
     car1.cars();

     car.prototype.getprice = function() {
        return this.price;
     }
     console.log("price of car1 : ",car1.getprice());


//using classes 
 

class car {
    name;
    brand;
    model;
    price;
    color;
    constructor (name,brand,model,price,color){
        this.name = name;
        this.brand = brand ;
        this.model = model;
        this.price = price ;
        this.color = color;
    }
    cars(){
        console.log("name :",this.name);
        console.log("brand :",this.brand);
        console.log("model :",this.model);
        console.log("price :",this.price);
        console.log("color :",this.color);

    }
    

}
let car3 = new cars("benz f10","benz","f10","20 lakhs","black");
console.log("car3 :",car3);
car3.cars();





}