function game() {
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

    this.move = (x,y) => { //the method moves the "15" to an empty box
        let nullX = getEmpty().x;
        let nullY = getEmpty().y;
        if (( (x - 1 === nullX || x + 1 === nullX) &&  y === nullY) || ((y - 1 === nullY || y + 1 === nullY) &&  x === nullX)) {
            arr[nullY][nullX] = arr[j][i]
            arr[j][i] = 0
            clicks++
        }
    }

    this.victory = () => {
        let res = true
        arrVic = [
            [1, 2, 3, 4],
            [5, 6, 7, 8,],
            [9, 10, 11, 12],
            [13, 14, 15, 0]
        ]
        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < HEIGHT; j++) {

        }
    }
}