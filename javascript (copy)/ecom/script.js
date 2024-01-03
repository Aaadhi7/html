console.log("\n\n\nAjax..")

let xhr = new XMLHttpRequest();
xhr.open("get",'');
xhr.send();

console.log("xhr response :",xhr);

xhr.onreadystatechange = function () {
    console.log("readystate :", xhr.readyState);
}