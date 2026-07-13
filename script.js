const input = document.getElementById("task-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("task-list");

button.addEventListener("click", function () {

    const li = document.createElement("li");

    li.textContent = input.value;

    list.appendChild(li);

    input.value = "";

});
