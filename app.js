let user1 = [];
let user2 = [];
let userMove = [];
let player;
let combination = [];
let clicks = 0;


function startGame () {
  user1 = [];
  user2 = [];
  // let userMove = [];
  player = '';
  combination = [];
  clicks = 0;
  console.log(clicks);
  const gameBoard = document.getElementsByClassName('option');
  for ( let i = 0; i < gameBoard.length; i++) {
    gameBoard[i].innerText = (i+1).toString();
    gameBoard[i].style.color = 'white';
  }
  for ( let i = 0; i < gameBoard.length; i++) {

    gameBoard[i].addEventListener('click', function(){
      if ((clicks % 2) == 0 && this.innerText !== '0') {
        user1.push(this.innerText);
        if(user1.length == 3) {
          combination = user1.sort();
          player = 'X';
          checkCombination(combination, player);
        }
        this.innerText = 'X';
        this.style.color = 'black';
        clicks++;
      } else if ((clicks%2) !== 0 && this.innerText !== 'X') {
        user2.push(this.innerText);
        if(user2.length == 3) {
          combination = user2.sort();
          player = '0';
          checkCombination(combination, player);
        }
        this.innerText = '0';
        this.style.color = 'black';
        clicks++;
      }
      
  })
}
}


startGame();



function checkCombination (combination, player) {
  const winningPositions = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
  let userCombo = combination.map(function(str){
    return parseInt(str);
  })

  console.log(userCombo);
  console.log(player);

  const displayResult = document.createElement('h1');
  const resultDiv = document.getElementById('result');
  const restartGame = document.createElement('button');



  for (let i = 0; i <winningPositions.length; i++) {
    console.log(userCombo + '=' + winningPositions[i]);
    if (userCombo.toString() == winningPositions[i].toString() && player == 'X') {
      displayResult.innerText = 'X wins';
      resultDiv.appendChild(displayResult);
      restartGame.innerText = 'Restart';
      resultDiv.appendChild(restartGame);
      restartGame.addEventListener('click', function(){
        resultDiv.removeChild(displayResult);
        resultDiv.removeChild(restartGame);
        startGame();
      })
    }  else if (userCombo.toString() === winningPositions[i].toString() && player == '0') {
      displayResult.innerText = '0 wins';
      resultDiv.appendChild(displayResult);
      restartGame.innerText = 'Restart';
      resultDiv.appendChild(restartGame);
      restartGame.addEventListener('click', function(){
        resultDiv.removeChild(displayResult);
        resultDiv.removeChild(restartGame);
        startGame();

      })
    }
  }
}


