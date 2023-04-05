const container = document.getElementById('container')
let gDiv = document.getElementsByClassName('grid')
const btn = document.getElementById("new-grid")
const regex = /^[1-9]$|^[1-9][0-9]$|^(100)$/ //checks that the input is only a numerical value between 1-100

createGrid(16)
changeColor()

btn.addEventListener('click', () => changeGrid())

function createGrid(number) {
    let total = (number * number) 
    for (let i = 0; i < total ; i++ ) {
        let cDiv = document.createElement('div') 
        cDiv.classList.add('grid') 
        
        container.appendChild(cDiv)       
    }
}

function changeGrid(){
    input = prompt("Enter new grid size (1-100)") ;

    if (input.match(regex)){
        container.style.cssText = `grid-template-columns: repeat(${input},auto) ; grid-template-rows: repeat(${input},auto)`
        container.replaceChildren();
    
        createGrid(input)
        changeColor()

    } else {
     alert("invalid input")
    }
}

function changeColor() {
    for (let i = 0; i<gDiv.length; i++){
    gDiv[i].addEventListener('mouseover', () => gDiv[i].style.cssText = `background-color : ${randomColor()}`)
    }
}

function randomColor() {
    let R = Math.floor(Math.random()* 255)
    let G = Math.floor(Math.random()* 255)
    let B = Math.floor(Math.random()* 255)
    let RGB = `rgb(${R},${G},${B})`
    return RGB
}
