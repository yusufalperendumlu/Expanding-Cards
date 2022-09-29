const expanding=document.querySelectorAll(".field");

expanding.forEach((field) => {
    field.addEventListener("click", () => {
        removeActiveClasses();
        field.classList.add("active");
    })
})

function removeActiveClasses(){

    expanding.forEach((field) => {
        field.classList.remove("active");
    })
}