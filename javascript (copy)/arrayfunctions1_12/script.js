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

{
 let arr = [2,4,5,6,7];
 sum=0;
 console.log(arr)
  const arr1 = arr.forEach((square,index,sum)=> {
  
    square = square*square;
    // console.log("square :",square);
    console.log(`square of ${arr[index]} :`,square);
 
    sum=sum+square;
    console.log("square :",square);

  });
}