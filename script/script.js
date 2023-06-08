console.log('JS OK')

// Recover Element from DOM

const play = document.getElementById('play');
const levelDiff = document.getElementById('difficulty-level');
const mainGame = document.querySelector('.row');
const scorePlaceholder = document.getElementById('score');


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
    

    

    // Variable to put Score in DOM
    let score = 0;

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
            // Condition to increment score only if the cell it hadn't been clicked
            if (!cell.classList.contains('active')){
                cell.classList.add('active');
                console.log(i) 
                score++
            }
            

            scorePlaceholder.innerText = score
        })
    }

    

})
