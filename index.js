const container = document.getElementById('container')
let gDiv = document.getElementsByClassName('grid')
const btn = document.getElementById("new-grid")
const regex = /^[1-9]$|^[1-9][0-9]$|^(100)$/

btn.addEventListener('click', () => changeGrid())

function createGrid(number) {
    let total = (number * number) 
    for (i = 0; i < total ; i++ ) {
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
    } else {
     alert("invalid input")
    }
}

console.log(gDiv)
createGrid(16)


