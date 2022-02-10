const playerFactory = (name, symbol, turn) => {
    return {name, symbol, turn}
}

const game = (() => {

    const cells = document.querySelectorAll(".cell");
    const display = document.querySelector(".game--status");
    const player1 = playerFactory('player 1', 'X', true);
    const player2 = playerFactory('Player 2', 'O', false);
    let currentPlayer = player1;

    const gameBoard = (() => { 
        let board = new Array(9).fill("");
        const cells = document.querySelectorAll('.cell');
    
        const winConditions= [
            [0,1,2],[3,4,5],[6,7,8], 
            [0,3,6],[1,4,7],[2,5,8], 
            [0,4,8],[2,4,6]          
        ];

        const checkWinCondition = (winCondition, symbol) =>{
            console.log(board[winCondition[0]])
            if(board[winCondition[0]] === board[winCondition[1]] && 
                board[winCondition[1]] === board[winCondition[2]]){
                    return true
                }
        }

        /* winCondition.every( index => board[index]===marker) */

        const checkForWin = () => {
            let winner = null;
            for(let i = 0; i < winConditions.length; i++){
                if(checkWinCondition(winConditions[i], currentPlayer.symbol)){
                    display.textContent = currentPlayer.name + " Wins!";
                }

            }
            console.log(winner)
            return winner;
        }

        const getBoard = () => {
            return board;
        }
        
        const setCell = (index, value) => {
            board[index] = value
            return true;
        }
    
        const resetBoard = () => {
            board = ["","","","","","","","",""]; 
            
        }

    
        const newGame = () => {
            let newGameBtn = document.querySelector('.game--restart')
            newGameBtn.addEventListener("click", () => {
                display.textContent = currentPlayer + " Wins!";
                resetBoard();
                currentPlayer = player1;
                cells.forEach(cell => {
                    cell.textContent = "";
                })
            })
        }
     
        newGame()
    
        return {
            getBoard,
            resetBoard,
            newGame,
            cells,
            setCell,
            checkForWin
        }
    })();

    const turnSwitch = () => {
        if(currentPlayer === player1){
            currentPlayer = player2;
        } else { 
            currentPlayer = player1 
        }
    }

    const setListeners = () => {
        cells.forEach(cell => {
            cell.addEventListener("click", handleClick)
        });
    }

    const handleClick = (event) => {
        const index = event.target.id;
        if(gameBoard.setCell(index, currentPlayer.symbol)){
            event.target.textContent = currentPlayer.symbol;
          if(gameBoard.checkForWin(currentPlayer.symbol, index)){
              //to add -> check if board is full for draw   
          } else {
            switchPlayers();
          }
        }
      }

      setListeners();

})();