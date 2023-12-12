//synchronus single threaded language


//Asychronous operation
//web space environment
//callback queue
//micrtask queue
//event loop
//call stack

console.log("first line..");
console.log("second line");
setTimeout(()=>{
    console.log("callback function");
},5000);

// let datas = fetch('https://jsonplaceholder.typicode.com/users');
// console.log(datas);

console.log("\n\n\nAjax..")

let xhr = new XMLHttpRequest();
xhr.open("get",'https://jsonplaceholder.typicode.com/users');
xhr.send();

console.log("xhr response :",xhr);

xhr.onreadystagechange = function(){
    console.log("readystate :",xhr.readystate);
    if(xhr.readyState ==4){
    console.log("response :",xhr.response);
    console.log("type of response :", typeof(xhr.response));

    let parsed_response = JSON.parse(xhr.response);
    console.log("parsed_response :",parsed_response);
    console.log("type of parsed_response :",typeof(parsed_response));
}

}