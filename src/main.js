const colorButtonsNode = document.getElementById('color-buttons');
const canvasNode = document.getElementById('canvas');
const danceButtonsNode = document.getElementById('dance-buttons');


const buttons = [
    {
        color: 'firebrick',
        imgSrc: '../assets/apple.jpeg',
        fruit: 'apple'
    },
    {
        color: 'darkgoldenrod',
        imgSrc: '../assets/starfruit.jpeg',
        fruit: 'starfruit'
    },
    {
        color: 'darkmagenta',
        imgSrc: '../assets/pomegranite.jpeg',
        fruit: 'pomegranite'
    },
    {
        color: 'slateblue',
        imgSrc: '../assets/plum.jpeg',
        fruit: 'plum'
    },
    {
        color: 'teal',
        imgSrc: '../assets/coconut.jpeg',
        fruit: 'coconut'
    },
];


for(let index = 0; index < buttons.length; index++) {
    const colorButton = document.createElement('button');
    let color = buttons[index].color;
    let icon = buttons[index].imgSrc;
    const buttonIcon = document.createElement('img');
    buttonIcon.src = icon;
    colorButton.classList.add('color-button');
    colorButton.value = color;   
    colorButtonsNode.appendChild(colorButton);
    colorButton.appendChild(buttonIcon);
    colorButton.addEventListener('click', function() {
        bodySegments(color);
    });
}

function bodySegments(color) {
    const bodySegment = document.createElement('span');
    let numberOfSegments = document.querySelectorAll('.body-segment').length;
    bodySegment.classList.add(color);
    bodySegment.classList.add('body-segment');
    if(numberOfSegments < 10) {
        canvasNode.appendChild(bodySegment);
    }

}
for(let index = 0; index < buttons.length; index++) {
    const danceButton = document.createElement('button');
    let fruit = buttons[index].fruit;
    let color = buttons[index].color;
    danceButton.classList.add('dance-button');
    danceButton.classList.add(fruit);
    danceButton.value = color;
    danceButtonsNode.appendChild(danceButton);
    danceButton.addEventListener('click', function() {
        danceSegment(color);
    });
}

function danceSegment(color) {
    let colorSelect = document.querySelectorAll('.' + color);
    let selectAll = document.querySelectorAll('.body-segment');
    for(let index = 0; index < selectAll.length; index++) {
        selectAll[index].classList.remove('dance');
    }
    for(let index = 0; index < colorSelect.length; index++){
        colorSelect[index].classList.add('dance');
    }
}