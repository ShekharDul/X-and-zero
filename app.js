const user1 = [];
const user2 = [];

function startGame () {
  let clicks = 0;
  const gameBoard = document.getElementsByClassName('option');
  for ( let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener('click', function(){
      if(clicks%2 == 0 && this.innerText !== '0'){
        user1.push(this.innerText);
        this.innerText = 'X';
      } else if (clicks%2 !== 0 && this.innerText !== 'X'){
        user2.push(this.innerText);
        this.innerText  = '0';
      }
      clicks++;
    })
  }
}

startGame();
