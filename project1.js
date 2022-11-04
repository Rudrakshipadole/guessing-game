// document.cookie="name=Rudrakshi";
// const myCookie=document.cookie;
// console.log(myCookie);
// local storage
// localStorage.setItem('name', 'abhi');
// const local=localStorage.getItem("name");
// console.log(local);





const generateRandom=(max)=>{
  const randomNumber=Math.random()*max+1;
const number=Math.floor(randomNumber);
return number;

}
const reSetGame=()=>{
  luckyNumber=generateRandom(50);
  score=10;
  scoreCard.textContent=score;
  message.textContent="Guess the no between 1and 50";
  emojiChanger.textContent="😉";
  userInputFiled.value=0;
}





let luckyNumber=generateRandom(50);
let score=10;
let highscore=localStorage.getItem('highscore');
if(highscore===null || highscore==='' || highscore===undefined){
  highscore=0;
}

//take input from the user
// grab a button which will going to call function to che
const userInputFiled=document.getElementById('user-input');
const message=document.getElementsByClassName('message')[0];
const scoreCard=document.getElementsByClassName('score')[0];
scoreCard.textContent=score; //set the score for first time

const container=document.getElementsByTagName('main')[0];
const emojiChanger=document.getElementById('emoji');
const highscoreCard=document.getElementById('highscore');
const resetButton=document.getElementById('again');



// message grab to show result
const checkButton=document.getElementById('check');



// function to check the no
const checkNumber=()=>{
 

    const userNumber= userInputFiled.value;
    if(userNumber>50 || userNumber<1){
      message.textContent="Please enter no between 1 an 20";
      return; //to terminate code
    }
    
    if(userNumber==luckyNumber){
     message.textContent="you are correct!";
     container.style.backgroundColor='green';
     emojiChanger.textContent='😁';
     if(highscore<score){
      highscore=score;
      highscoreCard.textContent=highscore;
      localStorage.setItem('highscore',highscore);
     }
    }else{
        if(luckyNumber<userNumber){
          message.textContent='Too high';
          score=score-1;
          scoreCard.textContent=score;
          container.style.backgroundColor='rgb(144, 69, 69)';
          emojiChanger.textContent='😢';


        }
        if(luckyNumber>userNumber){
           message.textContent="too low";
           score=score-1; 
           scoreCard.textContent=score;
          container.style.backgroundColor='#D82148';
           emojiChanger.textContent='😕';



        }
       
    }
    if(score==0){
      message.textContent="Game Over";
      emojiChanger.textContent="🤕";
      resetButton.style.display='block';
      return;
    }

};

// set the event listner for the button
checkButton.addEventListener('click',checkNumber);
resetButton.addEventListener('click', reSetGame);


