const inputbox = document.getElementById("input-box");
const listContainer =  document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("write something")
    }else{
        let li =  document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
    }
    inputbox.value = '';
}