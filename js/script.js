// const Puzzle = {
//     init() {
//         this.elements.main = document.createElement('section')
//         this.elements.gameContainer = document.createElement('div')
//         this.elements.puzzleContainer = document.createElement('div')

//         this.elements.classList.add('game')
//         this.elements.classList.add('gameContainer')
//         this.elements.classList.add('puzzleContainer')
//         this.elements.puzzleContainer.appendChild(this._drawPuzzle())
//     },

//     _drawPuzzle() {
//         let canvas = document.createElement('canvas');
//         canvas.classList.add('canvas')
//         canvas.width = '410' // size of container
//         canvas.height = '410'
//         let cellSize = canvas.width / 4
//         let context = canvas.getContext('2d');
//         let field = new game() // create object of game
//         field.mix(350) // перемешиваем содержимое коробки
//         field.setCellView(function(x,y) { // задаём внешний вид пятнашки
//             context.fillStyle = '#9ACD32'  // background-color
//             //context.draggable = 'true' // фишки можно перетягивать на пустое место при помощи мышки (drag & drop) ??????
//             context.arc(100, 75, 50, 0, 2 * Math.PI);
//             context.fillRect(x+1, y+1, cellSize-2, cellSize-2); // paint over the canvas
            
//         })
//         field.setNumView(function() { // параметры шрифта для цифр
//             context.font = "bold "+(cellSize/2)+"px Sans"
//             context.textAlign = "center"
//             context.textBaseline = "middle"
//             context.fillStyle = "#FFFFFF"
//         })
//         context.fillStyle = "#FFE4B5"
//         context.fillRect(0, 0, canvas.width, canvas.height)
        
//         field.draw(context, cellSize)
//         field.setTime() // продолжительность игры
//         //field.getMoves() // количесвто шагов

//         function event(x, y) { // функция производит необходимые действие при клике(касанию)
//             field.move(x, y);
//             context.fillStyle = "#FFE4B5"
//             context.fillRect(0, 0, canvas.width, canvas.height)
//             field.draw(context, cellSize)
//             if (field.victory()) { // если головоломка сложена, то пятнашки заново перемешиваются
//                 alert("Ура! Вы решили головоломку за "+ field.getClicks() + " ходов!") // вывод сообщения о выигрыше!!
//                 field.mix(300)
//                 context.fillStyle = "#FFE4B5"
//                 context.fillRect(0, 0, canvas.width, canvas.height)
//                 field.draw(context, cellSize)
//             }
//         }
//         let k = 0
//         canvas.addEventListener('click', function(e) { // обрабатываем клики мышью
//             var x = (e.pageX - canvas.offsetLeft) / cellSize | 0 // returns the number of pixels that the upper left corner
//             var y = (e.pageY - canvas.offsetTop)  / cellSize | 0
//             event(x, y) // вызов функции действия
            
//             time.append(`${field.getClicks()}/ `) // количество шагов ???
//         })
//         canvas.ontouchend = function(e) { // обрабатываем касания пальцем
//             var x = (e.touches[0].pageX - canvas.offsetLeft) / cellSize | 0
//             var y = (e.touches[0].pageY - canvas.offsetTop)  / cellSize | 0 
//             event(x, y)
//         }

//         divPuzzle.append(canvas)
//     }
// }
const section = document.createElement('section')
section.classList.add('game') // add style
document.body.append(section) //insert element after parents body

const div = document.createElement('div')
div.classList.add('gameContainer') // add style
div.innerText = 'The Gem Puzzle'
section.prepend(div) // insert div after tag section, but in him

const divPuzzle = document.createElement('div')
divPuzzle.className = 'divPuzzle'
divPuzzle.classList.add('puzzleContainer') // add style
div.append(divPuzzle) // insert divPuzzle after tag div, but in him
// ------------------------- FOOTER -------------------------- //
const footer = document.createElement('footer')
footer.classList.add('footer')
section.after(footer)

let time = document.createElement('h3')
time.innerText = 'Time'
time.classList.add('time')
footer.append(time)

let moves = document.createElement('h3')
moves.innerText = 'Moves'
moves.classList.add('time')
time.after(moves)

const pause = document.createElement('h3')
pause.innerHTML = 'Menu'
pause.classList.add('pause')
moves.after(pause)
// ----------------------- PAUSE MENU ---------------------------------------//
const pauseMenu = document.createElement('div')
pauseMenu.classList.add('pauseMenu')

const newGame = document.createElement('a')
newGame.textContent = 'New Game'
newGame.classList.add('navPause')

const saveGame = document.createElement('a')
saveGame.textContent = 'Saved Games'
saveGame.classList.add('navPause')

const bestScores = document.createElement('a')
bestScores.textContent = 'Best Scores'
bestScores.classList.add('navPause')

const rules = document.createElement('a')
rules.textContent = 'Rules'
rules.classList.add('navPause')

const settings = document.createElement('a')
settings.textContent = 'Settings'
settings.classList.add('navPause')

pauseMenu.append(newGame, saveGame, bestScores, rules, settings)

// ------------------------- RULES ------------------------------ //
let rulesContainer = document.createElement('div')
rulesContainer.classList.add('pauseMenu')

const rulesTitle = document.createElement('p')
rulesTitle.textContent = 'Rules of Gem Puzzle'
rulesTitle.classList.add('rulesContainer')

const rulesContent = document.createElement('p')
rulesContent.textContent = `The object of the puzzle is to place the tiles in order by making sliding moves that use the empty space.
You can save your game and load it later. Also you can choose game field size or a picture in Settings`
rulesContent.classList.add('rulesContent')

const goBack = document.createElement('a')
goBack.textContent = 'go back'
goBack.classList.add('goBack')

rulesContainer.append(rulesTitle, rulesContent, goBack)

// -----------------------SETTINGS --------------------------//
const settingsContainer = document.createElement('div')
settingsContainer.classList.add('pauseMenu')

const settingsTitle = document.createElement('p')
settingsTitle.textContent = 'Settings'
settingsTitle.classList.add('rulesContainer')
// FIELD SIZE //
const label1 = document.createElement('label')
label1.textContent = 'Field Size:'
label1.classList.add('settingsContainer')

const label1Select = document.createElement('SELECT')
label1Select.classList.add('sel1Obj')

const sel1Option1 = document.createElement('option')
sel1Option1.text = '3 x 3'
label1Select.options.add(sel1Option1, 1)

const sel1Option2 = document.createElement('option')
sel1Option2.text = '4 x 4'
label1Select.options.add(sel1Option2, 2)

const sel1Option3 = document.createElement('option')
sel1Option3.text = '5 x 5'
label1Select.options.add(sel1Option3, 3)

const sel1Option4 = document.createElement('option')
sel1Option4.text = '6 x 6'
label1Select.options.add(sel1Option4, 4)

const sel1Option5 = document.createElement('option')
sel1Option5.text = '7 x 7'
label1Select.options.add(sel1Option5, 5)

const sel1Option6 = document.createElement('option')
sel1Option6.text = '8 x 8'
label1Select.options.add(sel1Option6, 6)

const goBackSet = document.createElement('a')
goBackSet.textContent = 'go back'
goBackSet.classList.add('goBack')

settingsContainer.append(settingsTitle, label1, label1Select, goBackSet)


// function gameFooter() {
//     let result = '';
//     // 

//     result += `Time: ${timeOut} + Moves: ${moves} + Pause: ${pause}`
    
//     // for(let i=1; i<=3; i++) {
//     //     let li = document.createElement('li');
//     //     li.append(i);
//     //     result.push(li);
//     //   }
    
//       return result;
      
// }
// footer.append(...gameFooter());
// function createButtons() {
//     for (let i = 0; i < 16; i++) {
//         let button = document.createElement('button')
//         button.innerHTML = i + 1
//         button.classList.add('puzzleBtn')
//         divPuzzle.append(button)
//     }
// }

function init() {
        let canvas = document.createElement('canvas');
        canvas.classList.add('canvas')
        canvas.width = '410' // size of container
        canvas.height = '410'
        let cellSize = canvas.width / 4
        let context = canvas.getContext('2d');
        let field = new game() // create object of game
        field.mix(350) // перемешиваем содержимое коробки
        
        // let img = new Image() // картинка-пазл
        // img.src = './image.jpg'

        field.setCellView(function(x,y) { // задаём внешний вид пятнашки
            context.fillStyle = '#9ACD32'  // background-color
            // context.draggable = 'true' // фишки можно перетягивать на пустое место при помощи мышки (drag & drop) ?????? 
            context.arc(100, 75, 50, 0, 2 * Math.PI);
            context.fillRect(x+1, y+1, cellSize-2, cellSize-2); // paint over the canvas
            
            // context.drawImage(img, x+1, y+1, cellSize-2, cellSize-2, x+1, y+1, cellSize-2, cellSize-2); // draw the picture
            
        })

        field.setNumView(function() { // параметры шрифта для цифр
            context.font = "bold "+(cellSize/2)+"px Sans"
            context.textAlign = "center"
            context.textBaseline = "middle"
            context.fillStyle = "#FFFFFF"
        })

        context.fillStyle = "#FFE4B5"
        context.fillRect(0, 0, canvas.width, canvas.height)
        field.draw(context, cellSize)

        field.setTime() // продолжительность игры

        function event(x, y) { // функция производит необходимые действие при клике(касанию)
            field.move(x, y);
            context.fillStyle = "#FFE4B5"
            context.fillRect(0, 0, canvas.width, canvas.height)
            field.draw(context, cellSize)
            if (field.victory()) { // если головоломка сложена, то пятнашки заново перемешиваются
                alert("Ура! Вы решили головоломку за "+ field.getClicks() + " ходов!") // вывод сообщения о выигрыше!!
                field.mix(300)
                context.fillStyle = "#FFE4B5"
                context.fillRect(0, 0, canvas.width, canvas.height)
                field.draw(context, cellSize)
            }
        }
    
        canvas.addEventListener('click', function(e) { // обрабатываем клики мышью
            var x = (e.pageX - canvas.offsetLeft) / cellSize | 0 // returns the number of pixels that the upper left corner
            var y = (e.pageY - canvas.offsetTop)  / cellSize | 0
            event(x, y) // вызов функции действия
            
            moves.textContent = (`Moves: ${field.getClicks()}`) // количество шагов 

            let audioElement = new Audio('audio.mp3') //звук по нажатию на фишку
            audioElement.play()
        })
        // canvas.addEventListener('mou')
        canvas.ontouchend = function(e) { // обрабатываем касания пальцем
            var x = (e.touches[0].pageX - canvas.offsetLeft) / cellSize | 0
            var y = (e.touches[0].pageY - canvas.offsetTop)  / cellSize | 0 
            event(x, y)
        }

        divPuzzle.append(canvas)
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
    
    this.getClicks = function() { // number of clicks
        return clicks;
    }

    this.move = function(x,y) { // the method moves the "15" to an empty box
        let nullX = getEmpty().x;
        let nullY = getEmpty().y;
        if (( (x - 1 === nullX || x + 1 === nullX) &&  y === nullY) || ((y - 1 === nullY || y + 1 === nullY) &&  x === nullX)) {
            arr[nullY][nullX] = arr[y][x]
            arr[y][x] = 0
            clicks++
        }
    }

    this.victory = function() { // the method check condition of victory
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

    this.mix = function(stepCount) { // метод "перемешивает" фишки
        let x, y
        for (let i = 0; i < stepCount; i++) {
            let nullX = getEmpty().x
            let nullY = getEmpty().y
            let hMove = getRandomBool()
            let upLeft = getRandomBool()
            if (!hMove && !upLeft) { y = nullY; x = nullX - 1}
            if (hMove && !upLeft)  { x = nullX; y = nullY + 1}
            if (!hMove && upLeft)  { y = nullY; x = nullX + 1}
            if (hMove && upLeft)   { x = nullX; y = nullY - 1}
            if (0 <= x && x <= 3 && 0 <= y && y <= 3) {
                this.move(x, y)
            }
        }
        clicks = 0
    }
    
	this.setCellView = function(func) { // внешний вид пятнашки
		cell = func;
	}
	
	this.setNumView = function(func) { // параметры шрифта цифр
		num = func
    }
    
    this.draw = function(context, size) { // рисует "пятнашки" на холсте
		for (var i = 0; i < WIDTH; i++) {
			for (var j = 0; j < HEIGHT; j++) {
				if (arr[i][j] > 0) {
					if (cell !== null) {
						cell(j * size, i * size)
					}
					if (num !== null) {
						num()
						context.fillText(arr[i][j], j * size + size / 2, i * size + size / 2)
					}
				}
			}
        }
    }

    this.setTime = function() { // продолжительность игры
        let timeStart = Date.now()
        setInterval(() => {
            let res = new Date(Date.now() - timeStart)
            time.textContent = `Time: ${res.getMinutes()} : ${res.getSeconds()}`
        }, 1000)
    }

}

// window.addEventListener("DOMContentLoaded", function () {
//     Puzzle.init();
//   });

document.body.addEventListener("click", init())

pause.addEventListener('click', () => {
    let isSave = confirm('Do you want to save this game?')
    if (isSave) divPuzzle.before(pauseMenu) 
    else divPuzzle.before(pauseMenu)
})

rules.addEventListener('click', () => {
    pauseMenu.style.visibility = 'hidden'
    rulesContainer.style.visibility = 'visible'
    pauseMenu.before(rulesContainer)
})

goBack.addEventListener('click', () => {
    rulesContainer.style.visibility = 'hidden'
    settingsContainer.style.visibility = 'hidden'
    pauseMenu.style.visibility = 'visible'
})

settings.addEventListener('click', () => {
    pauseMenu.style.visibility = 'hidden'
    settingsContainer.style.visibility = 'visible'
    pauseMenu.before(settingsContainer)
})

goBackSet.addEventListener('click', () => {
    settingsContainer.style.visibility = 'hidden'
    pauseMenu.style.visibility = 'visible'
})
// function pause() {
//     let pauseMenu = document.createElement('div')
//     pauseMenu.classList.add('shadow')
//     let saveGame = document.createElement('a')
//     saveGame.textContent = 'Do you want to save game?'
//     let newGame = document.createElement('a')
//     newGame.textContent = 'New Game'
//     saveGame.appendChild(newGame)
//     let savedGames = document.createElement('a')
//     savedGames.textContent = 'Saved Games'
//     let bestScore = document.createElement('a')
//     bestScore.textContent = 'Best Scores'
//     let rules = document.createElement('a')
//     rules.textContent = 'Rules'
// }

// pause.addEventListener('click', pause())
    

// let query = () => {
//     let num
//     let res = []
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
//     for (i = 0; i < 4; i++) {
//         for (j = 0; j < 4; j++) {
//             num = arr[Math.floor(0 + Math.random() * 16)]
//             res += num

//             numIndex = arr.indexOf(num)
//             if (numIndex > -1) arr.splice(numIndex, 1)

//             console.log(`${num} num, ${res} res, ${numIndex} numIndex, ${arr} arr`)
//         }
        
//     }
// }
// query()
