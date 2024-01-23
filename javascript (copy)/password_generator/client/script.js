let pass = document.getElementById("pass");
let btn = document.getElementById("btn");
let btncp = document.getElementById("btncp");

function generatePass() {
    let chars =
        "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}?><";
    let passLength = 20;
    let password = "";

    for (let i = 0; i < passLength; i++)
        password += chars[Math.floor(Math.random() * chars.length)];

    return password;
}
btn.addEventListener("click", () => {
    pass.value = generatePass();
});

btncp.addEventListener("click", () => {
    if (pass.value != "") {
        navigator.clipboard.writeText(pass.value);
        pass.classList.add("active");
        setTimeout(() => {
            pass.classList.remove("active");
        }, 1000);
    }
});

async function handleSave(id){




    let jsonData =JSON.stringify(data);
    
    let response = await fetch('/editData',{
        method : "POST",
        header : {
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
btnsave.addEventListener("click", () => {
    
});
