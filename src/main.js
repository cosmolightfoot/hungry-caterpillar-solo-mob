const colorButtonsNode = document.getElementById('color-buttons');
const canvasNode = document.getElementById('canvas');
const danceButtonsNode = document.getElementById('dance-buttons');
const randomDanceButtonNode = document.getElementById('random-dance-button');
const randomDanceButton = document.createElement('button');
const autofeedButtonNode = document.getElementById('autofeed-button');
var uniqueRandoms = [];
var outerVal;
var cycleVal = -1;
// var cycleValFeed = -1;

const buttons = [
    {
        color: 'firebrick',
        imgSrc: './assets/apple.jpeg',
        fruit: 'apple'
    },
    {
        color: 'darkgoldenrod',
        imgSrc: './assets/starfruit.jpeg',
        fruit: 'starfruit'
    },
    {
        color: 'darkmagenta',
        imgSrc: './assets/pomegranite.jpeg',
        fruit: 'pomegranite'
    },
    {
        color: 'slateblue',
        imgSrc: './assets/plum.jpeg',
        fruit: 'plum'
    },
    {
        color: 'teal',
        imgSrc: './assets/coconut.jpeg',
        fruit: 'coconut'
    },
];

var numRandoms = buttons.length;
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
randomDance();
wormDance();
autofeed();

function autofeed() {
    const autofeedButton = document.createElement('button');
    autofeedButton.classList.add('random-button');
    autofeedButton.value = 'autofeed';
    autofeedButton.textContent = 'AUTOFEED';
    randomDanceButtonNode.appendChild(autofeedButton);
    autofeedButton.addEventListener('click', function() {
        for(let index = 0; index < 10; index++) {
            linearCycle();
            bodySegments(buttons[cycleVal].color);
        }
    });
}


function randomDance() {
    randomDanceButton.classList.add('random-button');
    randomDanceButton.textContent = 'RANDOM';
    randomDanceButton.value = 'random';
    randomDanceButtonNode.appendChild(randomDanceButton);
    randomDanceButton.addEventListener('click', function() {
        let randomNumber = makeUniqueRandom();
        danceSegment(buttons[randomNumber].color);
        
    });
}
function wormDance() {
    const wormDanceButton = document.createElement('button');
    wormDanceButton.classList.add('random-button');
    wormDanceButton.textContent = 'SEQUENCE';
    wormDanceButton.value = 'random';
    randomDanceButtonNode.appendChild(wormDanceButton);
    wormDanceButton.addEventListener('click', function() {
        linearCycle();
        danceSegment(buttons[cycleVal].color);
    });
}

function makeUniqueRandom() {
    if(uniqueRandoms.length === 0) {
        for(var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];
    uniqueRandoms.splice(index, 1);
    var specialCase = outerVal - 1;
    if(uniqueRandoms.length < 4) {
        if(outerVal > val) {
            uniqueRandoms.splice(specialCase, 0, outerVal);
        }
        else {
            uniqueRandoms.splice(outerVal, 0, outerVal);
        }
    }
    outerVal = val;

    return val;
}

function linearCycle() {
    //create a function that returns 0 on the first click and then 1, 2, etc till
    //reaches cycle length, at which point it returns to zero
    if(cycleVal < 4) {
        cycleVal++;
    }
    else {
        cycleVal = 0;
    }
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