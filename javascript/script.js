// console.log("welcome to javascript")
// console.log(window)
// var i;
// i="hello";
// console.log("i:" ,i)
// var goat ;
// goat="crstiano ronaldo";
// console.log("goat=",goat)


// var str="this is string";
// console.log("str=",str);
// console.log("type=",typeof str);


// var num=1000;
// console.log("num=", num);
// console.log("type=", typeof num);

// document.write("welcome");

// var str=" hello , world ";
// console.log("uppercase:",str.toUpperCase());
// console.log("length:",str.length)
// console.log("lowercase:",str.toLocaleLowerCase());
// console.log("lenght : ",str.trim().length);
// console.log("lenth :", str.trimEnd().length);
// console.log("length :", str.trimStart().length);
// console.log("substring :" , str.substring(0,5));
// console.log( "replace :",str.replace("hello","haii"));
// console.log("start with:", str.startsWith(" hello"));
// console.log("split :" ,str.split(','));
// console.log("join :",str.split(',').join(','));

// {
//     let b;
//     b = 15;
//     const c = 20;
//     console.log("b : ", b);
//     console.log("c : ", c);
// }
// var obj1 = {
//     name : "jane",
//     age : 21,
//     indian : false,
// };
// var json_str = JSON.stringify(obj1);
// console.log (`Json string : `)

// let num1 = 100;
// let num2 = 10; 

// if (num1 > num2) {
//     console,log(`num1 : ${num1} is greater` );
// } else if (num1 == num2) {
//     console.log("both are equal");

// }else {
//     console.log(`num2 : ${num2} is greater`);
// }
let day = 1;
switch (day) {
    case 1 :
    console.log("monday");
    break;

    case 2 :
    console.log("tuesday");
    break
    case 3 :
    console.log("wednesday");
    break;
    case 4 :
    console.log("thursday");
    break;

    case 5 :
    console.log("friday");
    break;
    case 6 :
    console.log("saturday");
    break;
    case 7 :
    console.log("sunday");
    break;
 
    default :
    console.log("invalid date")
    break;
}

 for(var i= 0;i < 10 ;i++) {
    console.log(i+1);
 }

 

while(i<=10) {
    console.log("hello from while loop");
    i = i+1;
}

do {
    console.log("hello from do while");
    i = i+1;

}while (i<10);

for (let i = 0; i<= 10; i++) {
    if (i==5) {
        continue;

    }

    if (i == 8){
        break;
    }
    console.log(i)
}