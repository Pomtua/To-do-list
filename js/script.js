const listContainer = document.getElementById("list-container")
const inputButton = document.getElementById("task-add");
const search = document.getElementById("search");

listContainer.addEventListener("click", function (event) {
    if (event.target.tagName == "LI") {
        event.target.classList.toggle("checked");
        saveData();
    } else if (event.target.tagName == "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
}) 

search.addEventListener("change", function (event) {
    const listTask = listContainer.children;

    for (let i = 0; i < listTask.length; i++) {
        listTask[i].style.display = "flex";
    }

    if (search.value == "") {
        return;
    }

    for (let i = 0; i < listTask.length; i++) {
        listTask[i].style.display = "none";
        if (listTask[i].innerHTML.slice(0, -14) == search.value) {
            listTask[i].style.display = "flex";
        }
    }
})    

function addTask() {
    if (inputButton.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputButton.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputButton.value = "";
    saveData();
}

function clearTask() {
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }
    saveData();
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();