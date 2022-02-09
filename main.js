const gameBoard = (() => { 
    let board = new Array(9).fill("");

    const getBoard = () => {
        let boardCopy = board;
        return boardCopy;
    }

    const getIndex = () => {

    }

    const createEvents = () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener("click", () => {
                if(cell.textContent == ""){
                    cell.textContent = game.getCurrentPlayer().symbol
                    game.turnSwitch();
                }
            })
        });
        return cells
    }
    
    const setCell = (index, value) => {
        board.splice(index, 1, )
    }

    const resetBoard = () => {
        board = new Array(9).fill(""); 
    }

    const newGame = () => {
        let newGameBtn = document.querySelector('.game--restart')
        newGameBtn.addEventListener("click", () => {
            getBoard();
            resetBoard();
        })
    }

    return {
        getBoard,
        resetBoard,
        createEvents,
        newGame
    }
})();

const game = (() => {
    const playerFactory = (name, symbol, turn) => {
        return {name, symbol, turn}
    }
    
    const turnSwitch = () => {
        if(currentPlayer === player1){
            currentPlayer = player2;
        } else { 
            currentPlayer = player1 
        }
    }

    const getCurrentPlayer = () => {
        return currentPlayer
    }

    const player1 = playerFactory('player 1', 'X', true);
    const player2 = playerFactory('Player 2', 'O', false);
    let currentPlayer = player1;

    return {
        turnSwitch,
        getCurrentPlayer
    }
})();

gameBoard.createEvents();
gameBoard.newGame();


