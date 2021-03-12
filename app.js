function makeGrid(number){
    number = 16; //testing
    const gridTarget = document.getElementById('grid-target');
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < number; i++){
        const gridlet = document.createElement('div');
        gridlet.classList.add('gridlet');
        fragment.appendChild(gridlet);
    }
    gridTarget.appendChild(fragment);
}

makeGrid();