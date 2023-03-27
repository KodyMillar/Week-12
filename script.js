let buttonRef = document.querySelector("#clickMe")

function alertUser() {
    alert("You Clicked!!!");
}

buttonRef.addEventListener("click", alertUser, {once: true})


function changeBGPink(){
    document.body.style.backgroundColor = "pink"
}

buttonRef.addEventListener("click", changeBGPink)

function changeText(){
    if (buttonRef.textContent === "Click Me!"){
        buttonRef.textContent = "clicked!"
    }
    else{
        buttonRef.textContent = "Click Me!"
    }
}

buttonRef.addEventListener("click", changeText)

function updateImage() {
    const image = document.querySelector = document.querySelector("#ShoppingCart")
    image.setAttribute(
        "src",
        "Images/GroceryCart.png"
    );
    image.setAttribute("width", 50);
    image.setAttribute("height", 50);
    image.setAttribute("alt", "shopping cart icon")
}
updateImage();

const buttonContainer = document.querySelector(".button-container");

function changeBGGreen(event)
{
    console.log(event.target)
    // event.target.style.backgroundColor = "green"
    event.target.classList.add("greenBG")
}

buttonContainer.addEventListener("click", changeBGGreen)