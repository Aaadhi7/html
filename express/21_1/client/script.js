

async function getData(){

    let folderPath = "./datas";
   let fileName = "datas.json";
   let filePath = path.join(folderPath,fileName);



    let data =await fetch('/getData');
    console.log("data : ",data);

    let parsedData = await data.json();
    console.log("parsedData : ",parsedData);

    let content = document.getElementById("content");
    console.log("content : ",content);

    let rows ="";

    for(let i =0 ;i<parsedData.length; i++){
        rows = rows+`
        <tr>
        <td>${parsedData[i]._id}</td>
        <td><input type="text" name ="name" id="name-${parsedData[i]._id}" value="${parsedData[i].name}" disabled = true></td>
        <td><input type="text" name="username" id="username-${parsedData[i]._id}" value = "${parsedData[i].username}" disabled = true></td>
        <td><input type="text" name ="email" id="email-${parsedData[i]._id}" value = "${parsedData[i].email}" disabled = true></td>
        <td><input type="text" name ="pass" id="pass-${parsedData[i]._id}" value = "${parsedData[i].pass}" disabled = true></td>
        <td><button onClick="handleEdit('${parsedData[i]._id}')">EDIT</button></td>
        <td><button onClick="handleSave('${parsedData[i]._id}')">SAVE</button></td>
        <td><button onClick="handleDelete('${parsedData[i]._id}')">DELETE</button></td>
        </tr>
        `
    }

    content.innerHTML = rows;
}

getData();

function handleEdit(id){


    let name =document.getElementById(`name-${id}`);
    name.disabled =false;

    let username =document.getElementById(`username-${id}`);
    username.disabled =false;

    let email =document.getElementById(`email-${id}`);
    email.disabled =false;

    let pass =document.getElementById(`pass-${id}`);
    pass.disabled =false;
}



async function handleSave(id){


    let nameTag =document.getElementById(`name-${id}`);
    let name = nameTag.value;

    let usernameTag =document.getElementById(`username-${id}`);
    let username = usernameTag.value;

    let emailTag =document.getElementById(`email-${id}`);
    let email = emailTag.value;

    let passTag =document.getElementById(`pass-${id}`);
    let pass = passTag.value;

    let data ={
        id,
        name,
        username,
        email,
        pass,
    }

    let jsonData =JSON.stringify(data);
    
    let response = await fetch('/editData',{
        method : "PUT",
        headers : {
            "Content-Type" : "applictaion/json",
        },
        body : jsonData,
    });

    let parsed_response = await response.text();
    console.log("parsed_response : ",parsed_response);

    if (parsed_response == "success") {
        getData();
        alert ("updation success");
    }else {
        alert("updation failed");
    }


    
}


async function handleDelete(id){

    let nameTag =document.getElementById(`name-${id}`);
    let name = nameTag.value;

    let usernameTag =document.getElementById(`username-${id}`);
    let username = usernameTag.value;

    let emailTag =document.getElementById(`email-${id}`);
    let email = emailTag.value;

    let passTag =document.getElementById(`pass-${id}`);
    let pass = passTag.value;

    let data ={
        id,
        name,
        username,
        email,
        pass,

    }

    let jsonData =JSON.stringify(data);
    
    let response = await fetch('/deleteData',{
        method : "DELETE",
        headers : {
            "Content-Type": "application/json",
        },
        body : jsonData,
    });

    getData();

    let parsed_response = await response.text();

    if(parsed_response == "success") {

        alert("Deletion Successful");
    } else {
        alert("Deletion Failed");
    }
}