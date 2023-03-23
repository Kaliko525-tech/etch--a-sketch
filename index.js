const container = document.getElementById('container')

function createGrid(number) {
    let total = (number * number) 
    for (i = 0; i < total ; i++ ) {
        let cDiv = document.createElement('div') 
        cDiv.classList.add('grid') 
        container.appendChild(cDiv)       
    }
    
    
}

createGrid(32)

let gDiv = document.getElementsByClassName('grid')
console.log(gDiv)