//array functions
{
    let arr =
        [
            {

                name: "adhi",
                place: "kunnukara",
                age: 21
            },
            {
                name: "abin",
                place: "kuruppumpady",
                age: 21
            },
            {
                name: "adhi",
                place: "kunnukara",
                age: 21
            }
        ]

// //for each
console.log("forEach ->");

 const z = arr.forEach((item, index) =>{
    console.log(`item-${index} :`,item);
 
});
console.log("z:",z);


//find
console.log("find ->");

const x = arr.find((item) => {
    return item.name == "abin";
});
console.log("x", x);

//filter 
console.log("filter ->");
const arr1 = arr.filter((item, index) => {
    return item.age == 21;
});
console.log("arr1 :", arr1);

//map
console.log("map ->");

const arr2 = arr.map((item) => {
    return item.name;
}); //return an array of same length
 
console.log("arr :",arr2);


//reduce
const value = arr.reduce((total,item) =>{
    console.log("total :",total);
    console.log("item :",item);
    return total + item.age;
},0);
console.log("value :",value );


}

// {
//  let arr = [2,4,5,6,7];
// let sum = 0;
// let arr2=[];
//  console.log(arr)
//   const arr1 = arr.forEach((square,index,sum)=> {
  
//     square = arr2.push(square*square);
//     // console.log("square :",square);
//     // console.log(`square of ${arr[index]} :`,arr2);
 
// console.log(arr2);



//   });
// }




// {

//     let arr = [1,3,5,2,7,6,7];
//     console

// }

//find the sum of squares of elements of a numerical array using foreach function.

{

function findSumOfSquare(arr){
    let sum = 0;
    arr.forEach((element,index)=>{
        sum= sum + Math.pow(element,2);
    });
    return sum;
}
let sumofsquare = findSumOfSquare([2,3,4]);
console.log("sum of sqares :",sumofsquare);


}


//find the first even number ofa an array using find


{

    function findEvenNumber(arr){
        let evennum = arr.find((element) =>{
            return element%2 ==0;
        });
        return evennum;
    }
    let firstevennum = findEvenNumber([3,5,7,8,9,2]);
    console.log("first even number :",firstevennum);
}


//filter all the even number in an array uding filter function

{

    function findAllEvenNum (arr){
        let allEvenNum = arr.filter((element,index)=> { 
            return element%2 == 0;
        });
        return allEvenNum;
    }
    let allEvenumber = findAllEvenNum([3,5,7,8,9,2]);
    console.log(" all even number in ana array :",allEvenumber);

}

//double each elements ina an array using map
{
function double(arr){
    let doublearr=arr.map((element) => {
       return element*2;
    });
    return doublearr;
}

  let doubleArr =double([6,4,10,5]);
  console.log("double of array elemnents",doubleArr);
}


//write a function 'productpositive' tahat takes an array of numbers as input and uses the rduve methofe to calculate the product of all possitive numbers ina an array

{

    function productPositive(arr){
        const prod = arr.reduce((prod,element)=>{
            if (element > 0){
                return prod = prod * element;
            }else{
                return prod;
            }
            },1 );
            return prod;
        }
        let product = productPositive([-1,2,3,-3,1,2,-2]);
        console.log("product :",product);
    }
