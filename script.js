let gridSize = 16
const container = document.querySelector(`.container`)
const clearButton = document.createElement('button')
clearButton.textContent = "Clear Sketchpad"
container.append(clearButton)


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
            xBox.id = y + `0` + x
            xBox.className = `xBox`
            xBox.style.width = `${boxSize}px`
            xBox.style.height = `${boxSize}px`
            yBox.append(xBox)
        }
    }
}


makeGrid(gridSize)

const boxHover = document.querySelectorAll('.xBox')
//Runs through each node in the boxHover nodelist
boxHover.forEach((box) => {
    //Adds mousever event listeners to every box
    box.addEventListener("mouseover", () =>
    //Adds the over CSS class to every box
    box.classList.add('hover')) 
})

//Adds a click event listener to the clear button
clearButton.addEventListener("click", () => {
    //Once clicked, it will reun through every box defined in boxHover and remove the hover class
    boxHover.forEach((box) => {
    box.classList.remove('hover')
    })
})