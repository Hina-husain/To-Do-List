const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "" ;
    saveData();

}

const list_Container = document.getElementById("listContainer");

if (listContainer) {
    listContainer.addEventListener("click", function(e) {
        // Check if the clicked element is an <li> tag
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        }
        // Check if the clicked element is a <span> tag
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);
} else {
    console.error("listContainer element not found");
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();