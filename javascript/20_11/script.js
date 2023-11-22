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


{
    //TIMER FUNCTION
  setTimeout(function (){
    console.log("From SetTimeOut...");
    alert("From setTimeOut")
  },3000)
}

setInterval(function(){
    console.log("From setInterval")
},3000
);

function putZero(sec){
    return sec < 10 ? "0" + sec : sec ;

}
 function show(){
    var time = document.getElementById('time');
    var dt = new Date();
    var hours = gt.getHours();
    var ampm =  hours >12?"pm":"am";
    time.innerHTML = putZero(hours%12) + ":" + putZero(dt.getMinutes())+":"+putZero(dt.getSeconds())+ampm;
    setTimeout(function(){
        show();
    },1000);


 }
 show();