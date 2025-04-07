// Variable declaration
const btnChangeText = document.getElementById("btnChangeText");
const changeColor = document.getElementById("btnChangeColor");
const addTag = document.getElementById('addTag')

// Changes text in H1 element
btnChangeText.addEventListener("click", function(){
    const heading = document.getElementById('heading'); // selecting element

    heading.innerHTML = "Javascript is fun"; // changing the element text
    
});


// Changes element color to green
changeColor.addEventListener("click", function(){
    const box = document.getElementById('box'); // selecting element

    box.style.backgroundColor = "green"; // styling the element
})

// Adds an element
addTag.addEventListener("click", function(){
    const container = document.getElementById('container'); // selecting element
 
    const newPar = document.createElement('p'); // creating a new element

    newPar.innerText = "New Element."; // inserting text for the new element

    container.appendChild(newPar); // placing the new element
})

