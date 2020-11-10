const section = document.createElement('section')
section.classList.add('game') // add style
document.body.append(section) //insert element after parents body

const div = document.createElement('div')
div.classList.add('gameContainer') // add style
div.innerText = 'The Gem Puzzle'
section.prepend(div) // insert div after tag section, but in him

const divPuzzle = document.createElement('div')
divPuzzle.classList.add('puzzleContainer') // add style
//divPuzzle.innerText = 'The Gem Puzzle'
div.append(divPuzzle) // insert divPuzzle after tag div, but in him


// function createButtons() {
//     for (let i = 0; i < 16; i++) {
//         let button = document.createElement('button')
//         button.innerHTML = i + 1
//         button.classList.add('puzzleBtn')
//         divPuzzle.append(button)
//     }
// }

function init() {
        var canvas = document.createElement('canvas');
        canvas.width = '410' // size of container
        canvas.height = '410'
        if (canvas.getContext) {
            var context = canvas.getContext('2d');
            context.fillStyle = 'red' // background-color
            context.fillRect(0, 0, canvas.width, canvas.height); // paint over the canvas
            divPuzzle.append(canvas)
        }
}

function game() { // logic of game
    let WIDTH = 4
    let HEIGHT = 4
    let cell, num = null,
        clicks = 0,
        arr = [ // field 4 x 4
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 0]
        ]

    function getEmpty() { // coordinates of empty cell
        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < HEIGHT; j++) {
                if (arr[j][i] === 0) {
                    return { 'x' : i, 'y' : j }
                }
            }
        }
    }

    function getRandomBool() { // arbitrary boolean
		if (Math.floor(Math.random() * 2) === 0) {
			return true
		}
    }
    
    this.getClicks =() => { // number of clicks
        return clicks;
    }

    this.move = (x,y) => { // the method moves the "15" to an empty box
        let nullX = getEmpty().x;
        let nullY = getEmpty().y;
        if (( (x - 1 === nullX || x + 1 === nullX) &&  y === nullY) || ((y - 1 === nullY || y + 1 === nullY) &&  x === nullX)) {
            arr[nullY][nullX] = arr[j][i]
            arr[j][i] = 0
            clicks++
        }
    }

    this.victory = () => { // the method check condition of victory
        let res = true
        arrVic = [
            [1, 2, 3, 4],
            [5, 6, 7, 8,],
            [9, 10, 11, 12],
            [13, 14, 15, 0]
        ]
        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < HEIGHT; j++) {
                if (arrVic[i][j] !== arr[i][j]) res = false
            }
        }
        return res
    }

    this.mix = () => { // метод "перемешивает" фишки
        for (i = 0; i < WIDTH; i++) {
            for (j = 0; j < HEIGHT; j++) {
                
            }
        }
    }
}

document.body.addEventListener("click", init())





