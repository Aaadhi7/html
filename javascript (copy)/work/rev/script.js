// let str = "hello";
// let reverse = '';
// for(let i = str.length - 1; i>=0; i--){
// reverse = reverse+str[i];
// }

// if (str == reverse){
//     console.log("string is pallidrome")

// }
// console.log("reverse :",reverse);


// //multiplication



// {
//     for(let i = 1 ; i <= 10; i++){
//         for(let j =1; i <=10 ; i++){
//             console.log(`${i} * ${j} = ${i*j}\n`)
//         } 
//     }
// }
// let i = 1;
// let sum ;

//     for(i=1;i<=100;i++) {
//         if(i%2==0) {
//         sum=sum+i}
        
// console.log("sum :" ,sum);
// }

let evensum = 0;
let oddsum= 0 ;

for(let i = 1 ; i<=50 ; i++){
    if(i%2 == 0) {
        console.log("even :" ,i);
        evensum=evensum + i ;
    }else {
        console.log("odd :",i);
        oddsum = oddsum + i;
    }
}
console.log("evensum :" , evensum);
console.log("oddsum :",oddsum);





let arr=[10,20,20,60,5];

//sum
function arrsum(arr){
 let sum=0;

 for(let i = 0; i<arr.length;i++){
    sum = sum + arr[i];
 }
 console.log("sum :",sum);
return sum;
}

console.log("arrsum :" ,arrsum(arr));
let arrsumvar =arrsum(arr);
console.log("arrsumvar : ",arrsumvar);




 //average
 
 function arrAverage(arr){
 let average= arrsum(arr)/arr.length;
 console.log("average :",average);
 return average;
 }
 console.log("arrAverage :",arrAverage(arr));

 //min 

 function arrmin(arr){
 let min = arr[0];

 for(let i = 0 ; i<arr.length ; i++){
    if (arr[i]<min){
min = arr[i];
    }
 }
 return min ;
}
console.log("arrmin :",arrmin(arr))

//max
function arrmax(arr){
    let max = arr[0];
   
    for(let i = 0 ; i<arr.length ; i++){
       if (arr[i]>max){
   max = arr[i];
       }
    }
    return max ;
   }
   console.log("max:",arrmax(arr));


// 

//    //neg
//    let arr1=[10,20,-20,5,-7];

//    function arrNeg(arr1){
   
//     for(let i = 0; i<arr.length ; i++){
//         if(arr[i]<0){
//         arr[i]= arr[i]*-1 ;
      
//         console.log(arr1);
        
//         }
//     }

//   }
//   console.log("arr",arr1);

// function arrToPossitive(arr){
// let i = 0;
// while(i<arr.length){
//     if (arr[i]<0) arr[i]=arr[i] * -1;
//     i++
// }
// return arr
// }



let i=0;
function count (){
    i++;
    while(i<=10){
        console.log(i);
        count()
    }

} 
   count()



   console.log("recrusive call");

   function countdown(n){
    if (n<=0){
    console.log("abin is a good gay");
   }else { 
    console.log(n);
    countdown(n-1);
   }
   }
   countdown(5)


   console.log("factorial usung recrusive call");


   function factorial(n){
    if( n==0 || n==1) {
        return 1 ;
    }else{
        return n * factorial(n-1);
    }

   }
       let fact= factorial(5);
       console.log("factorial :",fact);