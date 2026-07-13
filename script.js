button.addEventListener("click", function () {

    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = input.value;

    const deleteButton = document.createElement("button");
    
    deleteButton.textContent = "Delete";
    
    deleteButton.addEventListener("click", function () {
    
        li.remove();
    
    });
    
    li.appendChild(deleteButton);

    input.value = "";

});
