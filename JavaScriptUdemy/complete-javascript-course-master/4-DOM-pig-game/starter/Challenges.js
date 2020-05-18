/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore ,activePlayer, isPlaying, goal;


init();
// randome number btwn one and 6 (bc +1 as orig is1-5) and then floor makes it an integer

//document object gives acess to the DOM html 
//document.querySelector('#current-' + activePlayer).textContent = dice; 
//selects like css and textcontent edits the content in the selected thing java will change the argument passed as one thing so it will read '#current-0' or 'current-1', can only set plain text-> need to use inner html we set on this 

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ dice +'</em>'; it's a getter bc we get a value


//var x = document.querySelector('#score-0').textContent; //reads content


//set up an event handler
//callback function is called by another funciton as an argument 
//anonymous function is a funciton that doesn't have an name and can't be reused aka if the whole thing is written into the argument 
//another way to select elements by id 
//howw to change the image in an <img> element 
var prevRoll; 
document.querySelector('.btn-roll').addEventListener('click', function (){
    if(isPlaying) {
           //1.Random Num
        var dice1 = Math.floor(Math.random() * 6)+1;
        var dice2 = Math.floor(Math.random() * 6)+1;
        //2. Display the result 
        document.getElementById('diceOne')style.display= "block"; //allows editing of css
        document.getElementById('diceTwp')style.display= "block"; //allows editing of css
        document.getElementById('diceOne').src='dice-'+ dice1 + '.png';
        document.getElementById('diceOne').src='dice-'+ dice2 + '.png';

        //3. update the round score if the rolled number is not a 1 
        if(dice === 6 && prevRoll ===6){
            scores[activePlayer]=0; 
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 
            nextPlayer(); 
        }
        else if(dice !== 1){
            //add score
            roundScore += dice; 
            document.querySelector('#current-' + activePlayer).textContent = roundScore; 
             
        }else{
            //next player 
           nextPlayer();
        }  
        prevRoll= dice; 
  }
   
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(isPlaying){
        //add current score to global scor e
        scores[activePlayer] += roundScore;                           
         //update the ui 
          document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];                                           
               var input= document.querySelector('.final-score').value;                                 //undefiended 0 or null or '' are coerced to false      
            if(input){
                var winningScore = input; 
            }else{
                winningScore=100; 
            }
                                                     
          //check if player won the game   
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.diceOne').style.display = 'none';
            document.querySelector('.diceTwo').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            isPlaying = false; 
           
        } else{
            nextPlayer(); 
            
        }
    }
        
});
document.querySelector('.btn-new').addEventListener('click', init); 

function init() {
    isPlaying= true;
    scores= [0,0];
    activePlayer = 0; 
    roundScore =0; 
    goal = 1; 
    document.querySelector('.diceOne').style.display= 'none'; 
    
     document.querySelector('.diceTwo').style.display= 'none'; //sets the css property to none for that class 

//document.getelementbyId only for id's 
    document.getElementById('score-0').textContent = '0'; 
    document.getElementById('score-1').textContent = '0'; 
    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0'; 
    
    document.getElementById('name-0').textContent = 'Player 1'; 
    document.getElementById('name-1').textContent = 'Player 2'; 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 :activePlayer = 0; //ternary operator 
        //set the round score back to zero 
        roundScore = 0 ; 
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0'; 
        
        //now you have to get rid of the actice class name of one panel and add it to the ohter 
//        document.querySelector('.player-0-panel').classList.remove('active'); 
//        document.querySelector('.player-1-panel').classList.add('active'); 
        //can use toggle 
        document.querySelector('.player-0-panel').classList.toggle('active'); 
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDOM.style.display = 'none';
        document.getElementById('diceOne').style.display='none'; 
     document.getElementById('diceTwo').style.display='none'; 
}


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
