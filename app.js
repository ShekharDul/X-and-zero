




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
  const gameBoard = document.getElementsByClassName('option');
  for ( let i = 0; i<9; i++) {
      if (i==0 || i==2 || i==4 || i==6 || i==8) {
        gameBoard[i].addEventListener('click', function(){
          this.innerText = 'X';
      })
      } else if (i==1 || i==3 || i==5 ||i==7) {
          gameBoard[i].addEventListener('click', function(){
            this.innerText = 'O';
        })}
  } 
}


startGame();