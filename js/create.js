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
You can save your game and load it later. Also you can choose game field size of color in Settings`
rulesContent.classList.add('rulesContent')

const goBack = document.createElement('a')
goBack.textContent = 'go back'
goBack.classList.add('goBack')

rulesContainer.append(rulesTitle, rulesContent, goBack)
