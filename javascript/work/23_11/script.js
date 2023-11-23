// function factorial(a) {

//     let fact = 1;
//     for (let i = a; i > 0; i--)
//     {
//         fact = fact * i;
//     }

//     return fact;
// }
// // let result = ;
// console.log("result:", factorial(4));

function fibonacci(n){
    let a=0,b=1,c;
    console.log(a);
    console.log(b);
    for(i=2;i<n;i++){
        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
   
}

console.log("result" ,fibonacci(10));