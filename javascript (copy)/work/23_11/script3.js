// function sumArray(array){
//     let sum = 0
//     for (let i = 0; i < 
//         array.length; i += 1) {
//             sum += array[i]
//         }

//         console.log(sum)
//         // return sum
//         return sum
//       }

    //   sumArray([1, 4, 0, 9, 5]); 
    function average(array) {
        var sum = 0;
        for(var i = 0; i < array.length;i++){
            sum += array[i];
        }
        return sum / array.length;
    }
        console.log(average([1,2,3,4,5]))
        