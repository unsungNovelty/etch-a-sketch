window.onload = function () {
    
    function drawTheGrids() {
        const items = document.querySelectorAll('.item');

        for (const item of items) {
            item.addEventListener('mouseover', () => {
                item.style.backgroundColor = '#05A6F0'; 
            });
        }
    }

    function eraseTheGrids() {
        const items = document.querySelectorAll('.item');
        for (const item of items) {
            item.addEventListener('mouseover', () => {
                item.style.backgroundColor = 'whitesmoke'; 
            });
        }
    }

    let grids = window.prompt('Enter a number between 1 and 65');
    let totalGrids = grids * grids;
    
    function initialGrid() {
        let parentContainer = document.querySelector('.container');
        parentContainer.style.gridTemplateColumns = `repeat(${grids}, minmax(0.5rem, 1fr))`;
        parentContainer.style.gridTemplateRows = `repeat(${grids}, minmax(0.5rem, 1fr))`;
    }

    initialGrid();

    function creatingGrids() {
        // Creatgit brain grid elements
        for(let i = 1; i <= totalGrids; i++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'item');
            document.querySelector('.container').appendChild(div);
        }
    }

    creatingGrids();
    drawTheGrids();
    
    const eraseButton = document.getElementById('erase');
    eraseButton.addEventListener('click', () => {
        eraseTheGrids();
    } );
    
}