function makeGrid(number){
    if (number === undefined){number = 2;}
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

function choosePaint(){
   const paintMode = document.querySelectorAll('.paint-mode');
   paintMode.forEach((mode)=>{
       mode.addEventListener('click',()=>paintIt(mode.id));
   });
}

function paintIt(choice){
    const gridlets = document.querySelectorAll('.gridlet');
    gridlets.forEach((gridlet)=>{
        gridlet.addEventListener('mouseover', ()=>{
            if (choice === 'black'){gridlet.style.backgroundColor = 'black'};
            if (choice === 'grey'){gridlet.style.backgroundColor = moreGrey()};
            if (choice === 'random'){gridlet.style.backgroundColor = randomColors()};
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

let lightness = 100;

function moreGrey(){
    if (lightness === 0){lightness = 100;};
    let color = `hsl(0,0%,${lightness}%`;
    lightness -= 10; 
    return color;
};

function resize(){
    const resize = document.getElementById('resize-button');
    const gridlet = document.querySelectorAll('.gridlet');
    resize.addEventListener('click', ()=>{
        location.reload();
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
resize();
//paintIt();
choosePaint();
