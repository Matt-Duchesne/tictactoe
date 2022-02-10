const playerFactory = (name, symbol) => {
    return {name, symbol}
  }
  const game = (()=>{
    const player1 = playerFactory("Player 1", "X");
    const player2 = playerFactory("Player 2", "O");
    // initially, player 1 is current.
    let currentPlayer = player1;
  
    // the gameboard is a part of the game, so define it in here.
    const gameBoard = (()=>{
        
    })();
    
    const resetGame = ()=>{
      currentPlayer = player1;
      gameBoard.resetBoard();
    }
    const switchPlayers = ()=>{
      if(currentPlayer===player1){
        currentPlayer=player2;
      } else {
        currentPlayer=player1;
      }
    }
    const handleClick = (event)=>{
      // the game knows about the DOM, so let it do its thing
      const index = event.target.id;
      if(gameBoard.setCell(index, currentPlayer.symbol)){
        // if the gameboard was able to set that, it should have returned
        //  us a true - that way we know it worked. If we got a false, the
        //  cell was occupied, so we don't do anything in here
        event.target.textContent = currenPlayer.symbol;
        if(gameBoard.checkForWin(currentPlayer.symbol) ){
          // handle a win
        } else {
          // no win, next player
          switchPlayers();
        }
      }
    }
  
    document.querySelectorAll(".cell").forEach(cell =>
      cell.addEventListener("click", handleClick)
    );
    document.querySelector("#new-game").addEventListener("click", resetGame)
  
    // what do we really need to return from `game`?  
  })();