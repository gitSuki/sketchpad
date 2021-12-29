let gridSize = 16
const container = document.querySelector(`.container`)


function makeGrid (gridSize) {
    const gridBox = document.createElement('div')
    container.append(gridBox)
    const grid = document.createElement('grid')
    gridBox.classList.add('grid')
    boxSize = 500/gridSize
    
    for (y = 0; y<gridSize; y++) {
        let yBox = document.createElement('div')
        yBox.id = `yBox` + y
        yBox.className = `yBox`
        gridBox.append(yBox)
        
        for (x = 0; x<gridSize; x++) {
            let xBox = document.createElement('div')
            xBox.id = `xbox` + x
            xBox.className = `xBox`
            xBox.style.width = `${boxSize}px`
            xBox.style.height = `${boxSize}px`
            yBox.append(xBox)
        }
    }
}

makeGrid(gridSize)