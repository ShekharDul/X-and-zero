




// for(let clicks = 1; clicks <=9; clicks++) {
//   const gameBoard = document.getElementsByClassName('option');
//   if (i==1 || i==3 || i==5 || i==7 || i==9) {
//     gameBoard[i].addEventListener('click', function () {
//       this.innerText = 'X';
//   })} else {
//     gameBoard[i].addEventListener('click', function () {
//       this.innerText = '0';
//   })
// }
// }

function startGame () {
  let clicks = 0;
  const gameBoard = document.getElementsByClassName('option');
  for ( let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener('click', function(){
      if(clicks%2 == 0){
        this.innerText = 'X';
      } else {
        this.innerText  = 'O';
      }
      clicks++;
    })
  }
  
}

startGame();
