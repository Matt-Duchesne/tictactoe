const gameBoard = (() => { 
    const board = new Array(9).fill("");

    const getBoard = () => {
        return board
    }

    const createEvents = () => {
        const cells = document.getElementsByClassName('cell');
        cells.forEach(cell => {
            cell.addEventListener("click", () => {
                console.log("hello")
            })
        });
        return cells
    }

    const resetBoard = () => {
        board = new Array(9).fill(""); 
    }

    return {
        getBoard,
        resetBoard,
        createEvents,
    }
})();

console.log(gameBoard.createEvents())

const game = (() => {
    const playerFactory = (name, symbol, turn) => {
        return {name, symbol, turn}
    }
    const player1 = playerFactory('player 1', 'X', true);
    const player2 = playerFactory('Player 2', 'O', false);

    return {
        player1,
        player2,
    }
})();




