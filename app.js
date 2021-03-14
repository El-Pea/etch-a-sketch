function makeGrid(number){
    number = 16; //testing
    const gridlets = number * number;
    const gridTarget = document.getElementById('grid-target');
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < gridlets; i++){
        const gridlet = document.createElement('div');
        gridlet.style.height = `${560/number}px`;
        gridlet.style.width = `${560/number}px`;
        gridlet.classList.add('gridlet');
        fragment.appendChild(gridlet);

    }
    gridTarget.appendChild(fragment);
}

function paintItBlack(){
    const gridlets = document.querySelectorAll('.gridlet');
    gridlets.forEach((gridlet)=>{
        gridlet.addEventListener('mouseover', ()=>{
            gridlet.style.backgroundColor = 'black';
        });
    });
}

function randomColors() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function paintItRainbow(){
    const gridlets = document.querySelectorAll('.gridlet');
    gridlets.forEach((gridlet)=>{
        gridlet.addEventListener('mouseover', ()=>{
            gridlet.style.backgroundColor = randomColors();
        });
    });
}

makeGrid();
//paintItBlack();
//paintItRainbow();

