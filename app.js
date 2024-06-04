const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const hideAllTaskBtn = document.getElementById("hideAllTasks");
const deleteAllTaskBtn = document.getElementById("deleteAllTasks");
const showAllTaskBtn = document.getElementById("showAllTasks");

const addTask = () => {
    if (inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ''
    saveData();
}

listContainer.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

hideAllTaskBtn.addEventListener("click", () =>{
    const completedTasks = listContainer.querySelectorAll(".checked");
    for (const task of completedTasks) {
        task.style.display = "none";
    }
    saveData();
});

deleteAllTaskBtn.addEventListener("click", () => {
    const completedTasks = listContainer.querySelectorAll(".checked");
    for (const task of completedTasks) {
        listContainer.removeChild(task);
    }   
    saveData();
});

showAllTaskBtn.addEventListener("click", () => {
    const completedTasks = listContainer.querySelectorAll(".checked");
    for (const task of completedTasks) {
        task.style.display = "";
    }
    saveData();
});

const saveData = () =>{
    localStorage.setItem("data", listContainer.innerHTML);
}

const showTask = () =>{
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
