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

function fibonacci(n) {
    n = document.getElementById("num").value;
    let a = 0, b = 1, c;
    document.write(a);
    document.write(",");
    document.write(b);
    document.write(",");
    for (i = 2; i < n; i++) {
        c = a + b;
        document.write(c);
        document.write(",");
        a = b;
        b = c;
    };

}

// console.log("result" ,fibonacci(10));


