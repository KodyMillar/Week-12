let buttonRef = document.querySelector("#clickMe")

function addNewButtonAndpara(){
    const newButton = document.createElement("Button");
    newButton.textContent = "Purple"
    buttonContainer.appendChild(newButton)
    newButton.addEventListener("click", changeTextColor)
}
buttonRef.addEventListener("click", addNewButtonAndpara)

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
    const image = document.querySelector("#ShoppingCart")
    image.setAttribute(
        "src",
        "Images/GroceryCart.png"
    );
    image.setAttribute("width", 50);
    image.setAttribute("height", 50);
    image.setAttribute("alt", "shopping cart icon")
}
updateImage();

function addButton() {
    document.createElement("button")
}

buttonRef.addEventListener("click", addButton)


//1. find the element
const buttonContainer = document.querySelector(".button-container");
//2. define a function to respond to the event
function changeBGGreen(event)
{
    console.log(event.target)
    // event.target.style.backgroundColor = "green"
    if (event.target.tagName === "BUTTON")
        event.target.classList.add("greenBG")
}

//3. Use add event listener
buttonContainer.addEventListener("click", changeBGGreen)

function changeTextColor(event)
{
    // if t
    textcontent = event.target.textContent
    if (textcontent === "red"){
        event.target.style.color = "red"
    }
    else if (textcontent === "Purple"){
        event.target.style.color = "purple"
    }

}
buttonContainer.addEventListener("click", changeTextColor);

