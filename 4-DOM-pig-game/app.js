/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes.
Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that,
it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added
to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*///////////////////////////////////////////////////////////////////////////////
//                         UPDATED WITH CHALLENGES
////////////////////////////////////////////////////////////////////////////////

var score, roundScore, activePlayer, gamePlaying, previousDice, winningScore;




init();
////////////////////////////////////////////////////////////////////////////////
// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;
////////////////////////////////////////////////////////////////////////////////

// // document.querySelector('#current-' + activePlayer).textContent = dice;
// // // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
// //
// //
// // var x = document.querySelector('#score-0').textContent;
// // console.log(x);

////////////////////////////////////////////////////////////////////////////////
// MOVED TO INIT FUNCTION
// document.querySelector('.dice').style.display = 'none';
//
// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';
////////////////////////////////////////////////////////////////////////////////

// function btn(){
//   // do something
// }
// btn();

document.querySelector('.btn-roll').addEventListener('click', function(){

  if(gamePlaying){
    //1. RANDOM NUMBER
    var dice = Math.floor(Math.random() *6) +1;

    //2. DISPLAY THE RESULT
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'

    //3. UPDATE THE ROUND SCORE IF THE ROLLED NUMBER WAS NOT 1.
    ////////////////////////////////////////////////////////////////////////////////
    //    !==     IS NOT EQUAL, CHECKS VALUE AND TYPE, LIKE STRING AND NUMBER
    //    !=      IS NOT EQUAL, CHECKS JUST THE VALUE
    ////////////////////////////////////////////////////////////////////////////////

    if (dice !== 1) {
      //ADD SCORE
      roundScore += dice;    // SAME AS      roundScore = roundScore+dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;


            if(dice === 6 && previousDice === 6){
              scores[activePlayer] = 0;
              document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
              roundScore = 0;
              document.querySelector('#current-' + activePlayer).textContent = roundScore;
              previousDice = 0;
              nextPlayer();
            } else {
              previousDice = dice
            }


    } else {
      //NEXT PLAYER FUNCTION LINE 92-108
      nextPlayer();
      }
  }
});


document.querySelector('.btn-hold').addEventListener('click', function(){
  previouDice = 0
  if(gamePlaying){

      var input = document.querySelector('.winning-score').value;

      if (input){
        winningScore = input;
        } else {
          winningScore = 100;
      }

    // ADD CURRENT SCORE TO GLOBAL SCORE
    scores[activePlayer] += roundScore;

    // UPDATE THE USER INTERFACE (UI)
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // CHECK IF PLAYER WON THE GAME
    if (scores[activePlayer] >= winningScore){
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
  //NEXT PLAYER FUNCTION LINE 92-108
});


function nextPlayer(){

  //NEXT PLAYER
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  // if (activePlayer === 0){
  //   activePlayer = 1;
  // } else {
  //   activePlayer = 0;
  // }
  roundScore = 0;

  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  //  USING ('#...') FOR QUERYSELECTOR,     USING ('...') FOR GETELEMENTBYID
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}


////////////////////////////////////////////////////////////////////////////////
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*///////////////////////////////////////////////////////////////////////////////
