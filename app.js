
const button = document.getElementById('submit');
var guessRemaining = document.getElementById('guessRemaining');
let guess = 0;
const message = document.getElementById('message');
const refresh = document.getElementById('refresh');

  
const randomNum = Math.floor(Math.random() * 20 +1);
console.log(randomNum);

button.addEventListener('click', ()=>{
    
    const userGuess = document.getElementById('userGuess').value;

    if(userGuess == randomNum){ 
        message.textContent = 'You have crossed to safety.';
        const playagain = document.getElementById('playagain');  
        playagain.style.display = 'block';
        const noMore = document.getElementById('textinBox');
        noMore.style.display = 'none';
        const noMore1 = document.getElementById('remaining');
        noMore1.style.display = 'none';

    } else if (userGuess > randomNum) { 
        guess++;
        message.textContent = 'Too high.';
    } else if (userGuess < randomNum) {
        guess++;
        message.textContent = 'Too low.';
    }
    if(guess > 2) {
        message.textContent = `It was ${randomNum}. You drowned.`;
        const playagain = document.getElementById('playagain');  
        playagain.style.display = 'block';
        const noMore = document.getElementById('textinBox');
        noMore.style.display = 'none';
    }
    guessRemaining.textContent = 3 - guess;
  

});

refresh.addEventListener('click', ()=>{
    window.location.reload();
    refresh.classList.add('hide');
  
})

