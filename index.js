const container = document.getElementById('container');
let grid = document.getElementsByClassName('grid')

function createGrid(gridSize){
    let size = gridSize * gridSize;
    for (let i=0 ; i <= size ; i++){
        grid = document.createElement('div')
        grid.classList.add('grid')
        container.appendChild(grid)
    }
}

createGrid(16)