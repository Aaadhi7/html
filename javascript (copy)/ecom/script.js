// console.log("\n\n\nAjax..")

// let xhr = new XMLHttpRequest();
// xhr.open("get",'');
// xhr.send();

// console.log("xhr response :",xhr);

// xhr.onreadystatechange = function () {
//     console.log("readystate :", xhr.readyState);
// }


console.log("\n\n\nAjax..")

let xhr = new XMLHttpRequest();
xhr.open("get", 'https://jsonplaceholder.typicode.com/users');
xhr.send();

console.log("xhr response :",xhr);

xhr.onreadystatechange = function () {
    console.log("readystate :", xhr.readyState);

    let content = document.getElementById('content');
    console.log("content :", content);
    let datas = '';


    if (xhr.readyState == 4) {

        if (xhr.status == 200) {
            console.log("response :", xhr.response);
            console.log("type of response :", typeof(xhr.response));

            let parsed_response = JSON.parse(xhr.response);
            console.log("parsed_response :", parsed_response);
            console.log("type of parsed_response :", typeof (parsed_response));

            for (let i = 0; i < parsed_response.length; i++) {
                datas = datas + `<tr>
    <td>${parsed_response[i].id}</td>
    <td>${parsed_response[i].name}</td>
    <td>${parsed_response[i].username}</td>
    <td>${parsed_response[i].website}</td>
    </tr>`;
            }
            content.innerHTML = datas;
        } else {
            console.log("request failed");
        }
    } else {
        console.log("state not completed");
    }
}



