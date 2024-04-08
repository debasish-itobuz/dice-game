const btnRoll = document.querySelector('.btn--roll');
const holdRoll = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');

let playerScore = document.querySelector('#current--0');
let ComputerScore = document.querySelector('#current--1');

let scorePlayer = Number(score0.textContent);
let scoreComputer = Number(score1.textContent);

let player = Number(playerScore.textContent);
let computer = Number(ComputerScore.textContent);

let flag = 0;

const diceArr = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

const showDice = () => {
  let random = Math.floor(Math.random() * 6);
  console.log(random);
  // dice.src = "dice-1.png";
  dice.src = diceArr[random];
  if (flag === 0) {
    if (random === 0) {
      player = 0;
      playerScore.innerText = player;
      flag = 1;
    } else {
      player += random + 1;
      // console.log(player);
      playerScore.innerText = player;
    }
  } else {
    if (random === 0) {
      computer = 0;
      ComputerScore.innerText = computer;
      flag = 0;
    } else {
      computer += random + 1;
      ComputerScore.innerText = computer;
    }
  }
};

const holdFunc = ()=>{
    if(flag === 0){
        score0.textContent = player;
        playerScore.textContent = 0
        // flag = 1
    }
    else{
        score1.textContent = computer;
        ComputerScore.textContent = 0
        // flag = 0
    }
}

btnRoll.addEventListener('click', showDice);

holdRoll.addEventListener('click', holdFunc)
