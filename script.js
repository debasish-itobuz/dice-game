const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const holdRoll = document.querySelector('.btn--hold');
const newRoll = document.querySelector('.btn--new');
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
let playing = true;

const diceArr = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

const showDice = () => {
  if (playing) {
    let random = Math.floor(Math.random() * 6);
    console.log(random);
    dice.src = diceArr[random];
    if (flag === 0) {
      if (random === 0) {
        player = 0;
        playerScore.innerText = player;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        flag = 1;
      } else {
        player += random + 1;
        playerScore.innerText = player;
      }
    } else {
      if (random === 0) {
        computer = 0;
        ComputerScore.innerText = computer;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        flag = 0;
      } else {
        computer += random + 1;
        ComputerScore.innerText = computer;
      }
    }
  }
};

const holdFunc = () => {
  if (playing) {
    if (flag === 0) {
      scorePlayer += player;
      score0.textContent = scorePlayer;
      player = 0;
      playerScore.textContent = 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
      flag = 1;
    } else {
      scoreComputer += computer;
      score1.textContent = scoreComputer;
      computer = 0;
      ComputerScore.textContent = 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
      flag = 0;
    }
  }

  if (scorePlayer >= 20) {
    playing = false;
    player0.classList.add('player--winner');
    player0.classList.remove('player--active');
    dice.src = '';
  }
  if (scoreComputer >= 20) {
    playing = false;
    player1.classList.add('player--winner');
    player1.classList.remove('player--active');
    dice.src = '';
  }
};

btnRoll.addEventListener('click', showDice);

holdRoll.addEventListener('click', holdFunc);

newRoll.addEventListener('click', ()=>{
  location.reload();
})