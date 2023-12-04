function change(){
    document.getElementById('para').innerHTML = "text changed";
};


//2

function addItem(){
    tasks = document.getElementById('tasks').value;
    const list = document.querySelector('ol');
    list.append(Object.assign(document.createElement('li'), { textContent : tasks})) ;
};

//3

function submit(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    if (name == "" || email == "" || pass == ""){
        alert("please provide neccessary information");
        return false
    }


}