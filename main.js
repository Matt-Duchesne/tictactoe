const gameBoard = (() => { 
    let board = new Array(9).fill("");
    const cells = document.querySelectorAll('.cell');

    const getBoard = () => {
        return board;
    }
    
    const setCell = (index, value) => {
    }

    const resetBoard = () => {
        board = ["","","","","","","","",""]; 
    }

    const newGame = () => {
        let newGameBtn = document.querySelector('.game--restart')
        newGameBtn.addEventListener("click", () => {
            resetBoard();
        })
    }
 
    newGame()

    return {
        getBoard,
        resetBoard,
        newGame,
        cells,
    }
})();

const game = (() => {
    let cells = gameBoard.cells;
    const createEvents = () => {
        cells.forEach(cell => {
            cell.addEventListener("click", () => {
                if(cell.textContent == ""){
                    cell.textContent = currentPlayer.symbol
                    turnSwitch();
                }
            })
        });

    }

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

    createEvents();

    return {
        turnSwitch,
        createEvents,
        getCurrentPlayer
    }
})();

const player = (() => {
    const placeMark = () => {

    }

    return placeMark;
})();




