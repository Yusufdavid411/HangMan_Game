function Game(){
    const userInput = document.querySelector('#userInput')

    ans = userInput.value;

    if(ans.length == 1 && ans.includes('e')){
        const won = document.querySelector('p')
        const mog = document.querySelector('h2')
        console.log(won.innerText = 'You Won!')
        const ansReturn = document.querySelector('h3')
        console.log(ansReturn.innerText = 'Divine')
        mog.style.display = 'block';
        won.style.color = 'green';
        ansReturn.style.borderStyle = 'solid';
        ansReturn.style.borderColor = 'white';
    }else {
        const tryAgain = document.querySelector('p')
        console.log(tryAgain.innerText = 'Try Again?')
        const ansReturn = document.querySelector('h3')
        console.log(ansReturn.innerText = 'Divin?')
        tryAgain.style.color = 'red';
        ansReturn.style.borderStyle = 'solid';
        ansReturn.style.borderColor = 'red';
    }
}
