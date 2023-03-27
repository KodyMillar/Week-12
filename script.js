let buttonRef = document.querySelector("#clickMe")

function alertUser() {
    alert("You Clicked!!!");
}

buttonRef.addEventListener("click", alertUser, {once: true})
