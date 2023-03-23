const container = document.getElementById('container')
let gDiv = document.getElementsByClassName('grid')

function createGrid(number) {
    let total = (number * number) 
    for (i = 0; i < total ; i++ ) {
        let cDiv = document.createElement('div') 
        cDiv.classList.add('grid') 
        container.appendChild(cDiv)       
    }
}

createGrid(32)


console.log(gDiv)