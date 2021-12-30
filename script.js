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
    //Adds event listeners to every box
    box.addEventListener("mouseover", e =>
    //Adds the over CSS class to every box
    box.classList.add('hover')) 
})



/*
for (box in boxHover) {
    boxHover[box].addEventListener("mouseover", () => boxHover[box].style = ".hover")
}
*/


/*
const boxHover = document.querySelectorAll('.xBox')
for (let i = 0; i <boxHover.length; i++) {
    boxHover[i].addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "black"
    })
}
*/