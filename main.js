var btnNewGame = document.querySelector('.btnNewGame');
var btnRollDice = document.querySelector('.btnRollDice');
var btnHold = document.querySelector('.btnHold');

var player0 = document.querySelector('.p0');
var player1 = document.querySelector('.p1')

var img = document.querySelector('.img');

var varScore_0 = document.getElementById('varScore_0');
var varScore_1 = document.getElementById('varScore_1');
var perScore_0 = document.getElementById('perScore_0');
var perScore_1 = document.getElementById('perScore_1');

var pl0 = document.querySelector('.pl0');
var pl1 = document.querySelector('.pl1');


var score = [0,0];
var currentScore = 0;
var flag = 0;
var checkStop = 1;


var newGame = function(){
    score = [0,0];
    currentScore = 0;
    checkStop = 1;
    document.getElementById(`perScore_${flag}`).textContent = score[flag];
    document.getElementById(`perScore_${Number(!flag)}`).textContent = score[flag];
    document.getElementById(`varScore_${flag}`).textContent=currentScore;
    document.querySelector(`.p${flag}`).classList.remove('player--winner');
    document.querySelector(`.p${0}`).classList.add('active');
    document.querySelector(`.pl${flag}`).style.color = "Black";
    img.classList.remove('hidden');
    flag = 0;
}


btnRollDice.addEventListener('click',function(){
    if(checkStop){
        
        //create random dice and show
        var rollDice = Math.trunc(Math.random()*6+1);
        img.style.backgroundImage = `url("dice images/dice-${rollDice}.png")`;
        
        //check if rolldice !=1 and switch to second player
        if(rollDice!==1){
            currentScore +=rollDice;
            document.getElementById(`varScore_${flag}`).textContent=currentScore;
        }else{
            currentScore = 0;
            document.querySelector(`.p${flag}`).classList.remove('active');
            document.getElementById(`varScore_${flag}`).textContent=0;
            //i use function number to convert true to 1
            flag = Number(!flag);
            document.querySelector(`.p${flag}`).classList.add('active');
            document.getElementById(`varScore_${flag}`).textContent=currentScore;
        }
    }
});



btnHold.addEventListener('click',function(){
    document.querySelector(`.p${flag}`).classList.toggle('active');
    // make array have two position 1 , 0 and flag defined how active
    score[flag] += currentScore;    
    currentScore = 0;
    document.getElementById(`perScore_${flag}`).textContent = score[flag];
    document.getElementById(`varScore_${flag}`).textContent=currentScore;

    if(score[flag]>=100){
        document.querySelector(`.p${flag}`).classList.add('player--winner');
        document.querySelector(`.p${flag}`).classList.remove('active');
        document.querySelector(`.pl${flag}`).style.color = "rgb(248, 26, 96)";
        checkStop = 0;
        img.classList.add('hidden');
    }else{
        flag = Number(!flag);
        document.querySelector(`.p${flag}`).classList.toggle('active');
    }

});



btnNewGame.addEventListener('click',function(){
    newGame();
});









/**
 * i cant use variable with `variable${number}`;
 * but i can use this with dq(`variable${number}`); such as in line 25
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */