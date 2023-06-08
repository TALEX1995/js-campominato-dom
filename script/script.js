console.log('JS OK')

// Recover Element from DOM

const play = document.getElementById('play');
const levelDiff = document.getElementById('difficulty-level');
const mainGame = document.querySelector('.row');
const scorePlaceholder = document.getElementById('score');
const restartGame = document.getElementById('restart-game');
const winMessage = document.getElementById('win-message');
const loseMessage = document.getElementById('lose-message');

// Event listener click

play.addEventListener('click', function (event) {
    // Stoped submit event
    event.preventDefault()


    // Function
    const createCell = (levelDiffValue) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add(levelDiffValue);
        
        return cell;
    }

    const generateBombs = (totalCells, bombNumber) => {

        let randomBombNumber = [];

        while(randomBombNumber.length < bombNumber) {
            let randomNumber;
            do {
                randomNumber = Math.floor(Math.random() * totalCells) + 1;
            } while (randomBombNumber.includes(randomNumber));
            randomBombNumber.push(randomNumber);
        }
        console.log(randomBombNumber);
        return randomBombNumber;
    }


    // Refresh game
    mainGame.innerHTML = ''
    loseMessage.classList.add('d-none')
    winMessage.classList.add('d-none')
    restartGame.classList.add('d-none');


    // Initial data
    let rows = 10;
    let cols = 10;
    let totalCells = rows * cols;
    

    // Change row and cols based on levelDiff Value
    if (levelDiff.value === 'medium') {
        rows = 9;
        cols = 9;
        totalCells = rows * cols
    } else if (levelDiff.value === 'hard') {
        rows = 7;
        cols = 7;
        totalCells = rows * cols
    }


    // Create Bomb
    const bombNumber = 16;
    
    const bombs = generateBombs(totalCells, bombNumber);

    
    // Variable to put Score in DOM
    let score = 0;

    // Variable to see if the game is over
    let inGame = true

    // Cicle to generate cell into DOM
    for(let i = 1; i <= totalCells; i++) {
        // Create a variable to save cell element
        const cell = createCell(levelDiff.value);

        // Insert the numbers in the cell
        cell.innerText = i

        // Insert cell into DOM
        mainGame.appendChild(cell);
   

        // Add class Active at the click on the cell
        cell.addEventListener('click', function () {

            if (inGame) {
                // Stop function if cell is already clicked
                if (cell.classList.contains('active')) return;

                // Add active class
                cell.classList.add('active');

                // Control if the number is a bomb
                const itIsBomb = bombs.includes(parseInt(cell.innerText));

                // Condition to end the game
                if (itIsBomb) {
                    cell.classList.add('bomb');
                    inGame = false
                    loseMessage.classList.remove('d-none')
                }   else { 
                    console.log(i);
                    score++ 
                    if (score === (totalCells - bombNumber)){
                        inGame = false;
                        winMessage.classList.remove('d-none');
                    }
                }
            }   else {
                restartGame.classList.remove('d-none');
            }
            // Write score message into DOM
            scorePlaceholder.innerText = score
        })
    }
    // Refresh to 0 score message when click play again
    scorePlaceholder.innerText = score
})
