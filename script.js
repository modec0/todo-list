button.addEventListener("click", function () {

    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = input.value;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    li.appendChild(deleteButton);

    list.appendChild(li);

    input.value = "";

});
