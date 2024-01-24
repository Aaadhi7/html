

async function getData(){

    let data =await fetch('http://localhost:5000/getData');
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
        <td><input type="date" date ="date" id="date-${parsedData[i]._id}" value="${parsedData[i].date}" disabled = true></td>
        <td><input type="time" date ="time" id="time-${parsedData[i]._id}" value = "${parsedData[i].time}" disabled = true></td>
        <td><input type="text" date ="task" id="task-${parsedData[i]._id}" value = "${parsedData[i].task}" disabled = true></td>
        <td><input type="text" date ="top" id="top-${parsedData[i]._id}" value = "${parsedData[i].top}" disabled = true></td>
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


    let date =document.getElementById(`date-${id}`);
    date.disabled =false;

    let time =document.getElementById(`time-${id}`);
    time.disabled =false;

    let task =document.getElementById(`task-${id}`);
    task.disabled =false;

    let top =document.getElementById(`top-${id}`);
    top.disabled =false;
}



async function handleSave(id){


    let dateTag =document.getElementById(`date-${id}`);
    let date = dateTag.value;

    let timeTag =document.getElementById(`time-${id}`);
    let time = timeTag.value;

    let taskTag =document.getElementById(`task-${id}`);
    let task = taskTag.value;

    let topTag =document.getElementById(`top-${id}`);
    let top = topTag.value;

    let data ={
        id,
        date,
        time,
        task,
        top,
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

    let dateTag =document.getElementById(`date-${id}`);
    let date = dateTag.value;

    let timeTag =document.getElementById(`time-${id}`);
    let time = timeTag.value;

    let taskTag =document.getElementById(`task-${id}`);
    let task = taskTag.value;

    let topTag =document.getElementById(`top-${id}`);
    let top = topTag.value;

    let data ={
        id,
        date,
        time,
        task,
        top,

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