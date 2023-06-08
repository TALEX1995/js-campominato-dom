console.log('JS OK')

// Recover Element from DOM

const play = document.getElementById('play');
const levelDiff = document.getElementById('difficulty-level');
const mainGame = document.querySelector('.row');


// Function
const createCell = () => {
    const cell = document.createElement('div');
    cell.classList.add('cell')
    
    return cell;
}


// Event listener click

play.addEventListener('click', function (event) {
    // Stoped submit event
    event.preventDefault()

    // Refresh game
    mainGame.innerHTML = ''

    // Initial data
    let rows = 10;
    let cols = 10;
    let totalCells = rows * cols;

    // Change row and cols based on levelDiff Value
    if (parseInt(levelDiff.value) === 2) {
        rows = 9;
        cols = 9;
        totalCells = rows * cols
    } else if (parseInt(levelDiff.value) === 3) {
        rows = 8;
        cols = 8;
        totalCells = rows * cols
    }
    
    // Cicle to generate cell into DOM
    for(let i = 1; i <= totalCells; i++) {
        // Create a variable to save cell element
        const cell = createCell();

        // Insert the numbers in the cell
        cell.innerText = i

        // Insert cell into DOM
        mainGame.appendChild(cell);

        // Condition to change cell width
        if (totalCells === 100) {
            cell.classList.add('ten-cell');
        }   else if (totalCells === 81) {
            cell.classList.add('nine-cell')
        }   else {
            cell.classList.add('eight-cell');
        }


        // Add class Active at the click on the cell
        cell.addEventListener('click', function () {
            cell.classList.toggle('active');
            console.log(i)
        })
    }

})
