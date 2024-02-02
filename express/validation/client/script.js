

async function submitForm() {

    const name = document.getElementById('name').value

    console.log("name:", name);

    const email = document.getElementById('email').value
    console.log("email:", email);


    const password = document.getElementById('password').value
    console.log("password:", password);

    let data = {
        name,
        email,
        password,
    }
    let json_data = JSON.stringify(data);



    if (name == "" || email == "" || password == "") {
        alert("please enter a value")
        return false
    }
    else{
        if(name !== validateName.isNamevalid || email !== validateEmail.Emailvalid || password !== validatePassword.passwordvalid){
            alert("please enter a required value")
            return false
        }
    }



    let response = await fetch('/submit', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: json_data,
    });

    let parsed_response = await response.text();
    console.log("parsed_response:", parsed_response);


    if (parsed_response === "success") {
        alert('form submitted successfully');
        return;
    } else {
        alert('form submitted failed');
        return;
    }

}





async function getData() {



    let data = await fetch('/getData');
    console.log("data:", data)


    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let content = document.getElementById("content");
    console.log("content : ", content);

    let rows = "";

    for (let i = 0; i < parsedData.length; i++) {
        rows = rows +`
        <tr>
        <td>${parsedData[i]._id}</td>
        <td><input type="text" name="name" id="name-${parsedData[i]._id}"  value="${parsedData[i].name}" disabled=true ></input></td>
        <td><input type="text" name="email" id="email-${parsedData[i]._id}" value="${parsedData[i].email}" disabled=true></td>
        <td><input type="text" name="password" id="password-${parsedData[i]._id}" value="${parsedData[i].password}" disabled=true></td>
        <td><button onclick="handleEdit('${parsedData[i]._id}')">Edit</button></td>
        <td><button onclick="handleSave('${parsedData[i]._id}')">Save</button></td>
        <td><button onclick="handleDelete('${parsedData[i]._id}')">Delete</button></td>
        </tr>
        `
    }
    content.innerHTML = rows;
}

getData();

function handleEdit(id) {

    let name = document.getElementById(`name-${id}`)
    console.log("name : ", name);
    name.disabled = false;

    let email = document.getElementById(`email-${id}`)
    console.log("email : ", email);
    email.disabled = false;

    let password = document.getElementById(`password-${id}`)
    console.log("password : ", password);
    password.disabled = false;
}

async function handleSave(id) {
    console.log("id : ", id);

    let nameTag = document.getElementById(`name-${id}`)
    console.log("nameTag : ", nameTag);
    let name = nameTag.value;
    console.log("name : ", name)


    let emailTag = document.getElementById(`email-${id}`)
    console.log("emailTag : ", emailTag);
    let email = emailTag.value;
    console.log("email : ", email)


    let passTag = document.getElementById(`password-${id}`)
    console.log("passTag : ", passTag);
    let password = passTag.value;
    console.log("pass : ", password);

    let data = {
        id,
        name,
        email,
        password,
    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData : ", jsonData);

    let response = await fetch('/editData', {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: jsonData,

    });

    console.log("response : ", response);
    let parsed_response = await response.text();

    if (parsed_response == "success") {
        alert("Updation success")
    } else {
        alert("Updation failed")
    }
    getData();
}

async function handleDelete(id) {
    console.log("id : ", id);

    let nameTag = document.getElementById(`name-${id}`)
    console.log("nameTag : ", nameTag);
    let name = nameTag.value;
    console.log("name : ", name)


    let emailTag = document.getElementById(`email-${id}`)
    console.log("emailTag : ", emailTag);
    let email = emailTag.value;
    console.log("email : ", email)


    let passTag = document.getElementById(`password-${id}`)
    console.log("passTag : ", passTag);
    let password = passTag.value;
    console.log("pass : ", password);

    let data = {
        id,
        name,
        email,
        password,
    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData : ", jsonData);

    let response = await fetch('/deleteData', {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        body: jsonData,

    });

    getData();

    console.log("response : ", response);
    let parsed_response = await response.text();

    if (parsed_response == "deleted") {
        alert("Deletion Success")
    } else {
        alert("Deletion failed")
    }

}



function validateName() {

    const name = document.getElementById('name').value;
    console.log("name:", name);

    const name_error = document.getElementById(`name-error`);

    const name_regex = /^[A-Za-z]{2,30}( [A-Za-z]{2,30})?$/;

    let isNamevalid = name_regex.test(name);
    console.log("isNamevalid:", isNamevalid)

    if (!isNamevalid) {
        name_error.innerHTML = "Invalid name";

        return;

    } else {
        name_error.innerHTML = "";

        return;
    }

}

function validateEmail() {

    const email = document.getElementById('email').value;

    console.log("email:", email);


    const email_error = document.getElementById('email-error');

    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let Emailvalid = email_regex.test(email);

    console.log("Emailvalid:", Emailvalid)


    if (!Emailvalid) {
        email_error.innerHTML = "Invalid email"

        return;

    } else {

        email_error.innerHTML = ""

        return;

    }
}

function validatePassword() {

    const password = document.getElementById('password').value

    console.log("password:", password);

    const password_error = document.getElementById(`password-error`);

    const password_regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    let passwordvalid = password_regex.test(password);
    console.log("passwordvalid:", passwordvalid);

    if (!passwordvalid) {
        password_error.innerHTML = "Invalid passsword"

        return;
    } else {
        password_error.innerHTML = ""
        return;
    }



}


