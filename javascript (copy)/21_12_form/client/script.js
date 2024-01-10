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
        <td><input type= "text" name = "fname" id="fname-${parsedData[i]._id}" value="${parsedData[i].fname}"></td>
        <td><input type= "text" name = "lname" id="lname-${parsedData[i]._id}" value="${parsedData[i].lname}"></td>
        <td><input type= "text" name = "uname" id="uname-${parsedData[i]._id}" value="${parsedData[i].uname}"></td>
        <td><input type= "text" name = "email" id="email-${parsedData[i]._id}" value="${parsedData[i].email}"></td>
    
        <td><input type= "text" name = "pass" id="pass-${parsedData[i]._id}" value="${parsedData[i].pass}"></td>
        <td><input type= "text" name = "age" id="age-${parsedData[i]._id}" value="${parsedData[i].age}"></td>
        
        <td><input type= "text" name = "add" id="add-${parsedData[i]._id}" value="${parsedData[i].add}"></td>
        <td><input type= "text" name = "pass" id="pass-${parsedData[i]._id}" value="${parsedData[i].pass}"></td>
        <td><button onclick="handleEdit"(${parsedData[i]._id})>EDIT</button></td>
  
        </tr>`
    }
    content.innerHTML = rows;

}
getData();

function handleEdit(id){
    console.log("id :" ,id);
    
    let fname = document.getElementById(`fname-${id}`);
    fname.disasble = false;

    let lname = document.getElementById(`lname-${id}`);
    lname.disasble = false;

    let uname = document.getElementById(`uname-${id}`);
    uname.disasble = false;

    let email = document.getElementById(`email-${id}`);
    email.disasble = false;

    let pass = document.getElementById(`pass-${id}`);
    pass.disasble = false;

    let age = document.getElementById(`age-${id}`);
    age.disasble = false;

    let add = document.getElementById(`add-${id}`);
    add.disasble = false;
}


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