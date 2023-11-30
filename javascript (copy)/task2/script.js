function change(){
    document.getElementById('para').innerHTML = "text changed";
};




function addItem(){
    tasks = document.getElementById('tasks').value;
    const list = document.querySelector('ol');
    list.append(Object.assign(document.createElement('li'), { textContent : tasks})) ;
};