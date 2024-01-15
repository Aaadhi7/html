async function getData() {
    console.log("hello world");

    let data = await fetch('http://localhost:3000/getData');
    console.log("data :", data);

    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let content = document.getElementById("content");
    console.log("content :", content);

    let rows = "";

    for (let i = 0; i < parsedData.length; i++) {
        rows = rows + `
        <tr>
        <td>${parsedData[i]._id}</td>
        <td><input type= "text" name = "date" id="date-${parsedData[i]._id}" value="${parsedData[i].date}" disabled = true></td>
        <td><input type= "text" name = "time" id="time-${parsedData[i]._id}" value="${parsedData[i].time}" disabled = true></td>
        <td><input type= "text" name = "tasks" id="tasks-${parsedData[i]._id}" value="${parsedData[i].tasks}" disabled = true></td>
        <td><input type= "text" name = "top" id="top-${parsedData[i]._id}" value="${parsedData[i].top}" disabled = true></td>
    
       
        <td><button onClick="handleEdit('${parsedData[i]._id}')">EDIT</button></td>
        <td><button onClick="handleSave('${parsedData[i]._id}')">SAVE</button></td>
        <td><button onClick="handleDelete('${parsedData[i]._id}')">DELETE</button></td>
  
        </tr>`
    }
    content.innerHTML = rows;

}
getData();

function handleEdit(id) {
    console.log("id :", id);

    let date = document.getElementById(`date-${id}`);
    date.disabled = false;

    let time = document.getElementById(`time-${id}`);
    time.disabled = false;

    let tasks = document.getElementById(`tasks-${id}`);
    tasks.disabled = false;

    let top = document.getElementById(`top-${id}`);
    top.disabled = false;

}

async function handleSave(id) {

    console.log("id :", id);


    let dateTag = document.getElementById(`date-${id}`);
    let date = dateTag.value;
    console.log("date :" ,date);

    let timeTag = document.getElementById(`time-${id}`);
    let time = timeTag.value;

    let tasksTag = document.getElementById(`tasks-${id}`);
    let tasks = tasksTag.value;


    let topTag = document.getElementById(`top-${id}`);
    let top = topTag.value;

    let passTag = document.getElementById(`pass-${id}`);
    let pass = passTag.value;

    let ageTag = document.getElementById(`age-${id}`);
    let age = ageTag.value;

    let addTag = document.getElementById(`add-${id}`);
    let add = addTag.value;


    let phnTag = document.getElementById(`phn-${id}`);
    let phn = phnTag.value;



    let data = {
        id,
        date,
        time,
        tasks,
        top,
      
    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData :", jsonData);

    let response = await fetch('http://localhost:3000/editData', {
        method: "PUT",
        header: {
            "Content-Type ": "application/json",
        },
        body : jsonData,
    });

    console.log("response : ", response);

    let parsed_response = await response.text();
    console.log("parsed_response : ", parsed_response);

    if (parsed_response == "success") {
        alert("updation success");

    } else {
        alert("updation failed");

    }
}

async function handleDelete(id) {

    console.log("id :", id);


    let dateTag = document.getElementById(`date-${id}`);
    let date = dateTag.value;
    console.log("date :" ,date);

    let timeTag = document.getElementById(`time-${id}`);
    let time = timeTag.value;

    let tasksTag = document.getElementById(`tasks-${id}`);
    let tasks = tasksTag.value;


    let topTag = document.getElementById(`top-${id}`);
    let top = topTag.value;

    let passTag = document.getElementById(`pass-${id}`);
    let pass = passTag.value;

    let ageTag = document.getElementById(`age-${id}`);
    let age = ageTag.value;

    let addTag = document.getElementById(`add-${id}`);
    let add = addTag.value;


    let phnTag = document.getElementById(`phn-${id}`);
    let phn = phnTag.value;



    let data = {
        id,
        date,
        time,
        tasks,
        top,
      
    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData :", jsonData);

    let response = await fetch('http://localhost:3000/deleteData', {
        method: "DELETE",
        header: {
            "Content-Type ": "application/json",
        },
        body : jsonData,
    });

    console.log("response : ", response);

    let parsed_response = await response.text();
    console.log("parsed_response : ", parsed_response);

    if (parsed_response == "success") {
        alert("deletion success");

    } else {
        alert("deletion failed");

    }
}