function makeGrid(number){
    //number = 16; //testing
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
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function paintItRainbow(){
    const gridlets = document.querySelectorAll('.gridlet');
    gridlets.forEach((gridlet)=>{
        gridlet.addEventListener('mouseover', ()=>{
           //  gridlet.style.backgroundColor = randomColors();
             gridlet.style.backgroundColor = moreGrey();
        });
    });
}

let lightness = 100;

function moreGrey(){
    if (lightness === 0){lightness = 100;};
    let color = `hsl(0,0%,${lightness}%`;
    lightness -= 10; 
    return color;
};

function doItAgain(){
    const reset = document.getElementById('reset-button');
    reset.addEventListener('click', ()=>{
        location.reload();
        //howMany();
    });
};

function howMany(){
    const input = parseInt(prompt('Enter a number between 1-100', 16), 10);
    if (input <= 0 || input > 100 || isNaN(input)){
        alert('Please enter a number between 1-100');
        return howMany();
    } else {
        return input;
    }
}

makeGrid(howMany());
doItAgain();
//paintItBlack();
paintItRainbow();
//paintItGrey();
