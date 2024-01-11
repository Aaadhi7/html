async function getData(){
    console.log("hello world");

    let data = await fetch('http://localhost:3000/getData');
    console.log("data :",data);

    let parsedData = await data.json();
    console.log("parsedData : ",parsedData);

    let content = document.getElementById("content");
    console.log("content :",content);

    let rows = "";

    for(let i = 0; i<parsedData.length;i++){
        rows = rows + `
        <tr>
        <td>${parsedData[i]._id}</td>
        <td><input type= "text" name = "fname" id="fname-${parsedData[i]._id}" value="${parsedData[i].fname}" disabled = true></td>
        <td><input type= "text" name = "lname" id="lname-${parsedData[i]._id}" value="${parsedData[i].lname}" disabled = true></td>
        <td><input type= "text" name = "uname" id="uname-${parsedData[i]._id}" value="${parsedData[i].uname}" disabled = true></td>
        <td><input type= "text" name = "email" id="email-${parsedData[i]._id}" value="${parsedData[i].email}" disabled = true></td>
    
        <td><input type= "text" name = "pass" id="pass-${parsedData[i]._id}" value="${parsedData[i].pass}" disabled = true></td>
        <td><input type= "text" name = "age" id="age-${parsedData[i]._id}" value="${parsedData[i].age}" disabled = true></td>
        
        <td><input type= "text" name = "add" id="add-${parsedData[i]._id}" value="${parsedData[i].add}" disabled = true></td>
        <td><input type= "text" name = "phn" id="phn-${parsedData[i]._id}" value="${parsedData[i].phn}" disabled = true></td>
        <td><button onclick="handleEdit('${parsedData[i]._id}')">EDIT</button></td>
        <td><button onclick="handleSave('${parsedData[i]._id}')">SAVE</button></td>
  
        </tr>`
    }
    content.innerHTML = rows;

}
getData();

function handleEdit(id){
    console.log("id :" ,id);
    
    let fname = document.getElementById(`fname-${id}`);
    fname.disabled = false;

    let lname = document.getElementById(`lname-${id}`);
    lname.disabled = false;

    let uname = document.getElementById(`uname-${id}`);
    uname.disabled = false;

    let email = document.getElementById(`email-${id}`);
    email.disabled = false;

    let pass = document.getElementById(`pass-${id}`);
    pass.disabled = false;

    let age = document.getElementById(`age-${id}`);
    age.disabled = false;

    let add = document.getElementById(`add-${id}`);
    add.disabled = false;

    let phn = document.getElementById(`phn-${id}`);
    phn.disabled = false;
}

async function handleSave(id){

    console.log("id :",id );


let fnameTag = document.getElementById(`fname-${id}`);
let fname = fnameTag.value;

let lnameTag = document.getElementById(`lname-${id}`);
let lname = lnameTag.value;

let unameTag = document.getElementById(`uname-${id}`);
let uname = unameTag.value;


let emailTag = document.getElementById(`email-${id}`);
let email = emailTag.value;

let passTag= document.getElementById(`pass-${id}`);
let pass = passTag.value;

let ageTag = document.getElementById(`age-${id}`);
let age = ageTag.value;

let addTag= document.getElementById(`add-${id}`);
let add = addTag.value;


let phnTag= document.getElementById(`phn-${id}`);
let phn = phnTag.value;



let data = {
    id,
    fname,
    lname,
    uname,
    email,
    pass,
    age,
    add,
    phn,
}

let jsonData = JSON.stringify(data);
console.log("jsonData :",jsonData);

let response = await fetch('http://localhost:3000/editData',{
    method : "PUT",
    headers : {
        "content-type " : "application/json",
    },
    body : jsonData,
});

console.log("response : ",response);

let parsed_response = await response.text();

if(parsed_response == "success"){
    alert("updation success");

}else {
    alert("updation failed");

}
}
