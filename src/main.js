const colorButtonsNode = document.getElementById('color-buttons');
const canvasNode = document.getElementById('canvas');
const danceButtonsNode = document.getElementById('dance-buttons');

const buttons = [
    {
        color: 'firebrick',
        imgSrc: '',
        fruit: 'apple'
    },
    {
        color: 'darkgoldenrod',
        imgSrc: '',
        fruit: 'banana'
    },
    {
        color: 'darkmagenta',
        imgSrc: '',
        fruit: 'pomegranite'
    },
    {
        color: 'slateblue',
        imgSrc: '',
        fruit: 'blueberry'
    },
    {
        color: 'teal',
        imgSrc: '',
        fruit: 'pineapple'
    },
];


for(let index = 0; index < buttons.length; index++) {
    const colorButton = document.createElement('button');
    let color = buttons[index].color;
    colorButton.textContent = color;
    colorButton.classList.add('color-button');
    colorButton.value = color;   
    colorButtonsNode.appendChild(colorButton);
    colorButton.addEventListener('click', function() {
        bodySegments(color);
    });
}

function bodySegments(color) {
    const bodySegment = document.createElement('span');
    let numberOfSegments = document.querySelectorAll('.body-segment').length;
    bodySegment.classList.add(color);
    bodySegment.classList.add('body-segment');
    if(numberOfSegments < 7) {
        canvasNode.appendChild(bodySegment);
    }

}
for(let index = 0; index < buttons.length; index++) {
    const danceButton = document.createElement('button');
    let fruit = buttons[index].fruit;
    let color = buttons[index].color;
    danceButton.textContent = fruit;
    danceButton.classList.add('dance-button');
    danceButton.classList.add('color');
    danceButton.value = color;
    danceButtonsNode.appendChild(danceButton);
    danceButton.addEventListener('click', function() {
        danceSegment(color);
    });
}

function danceSegment(color) {
    let colorSelect = document.querySelectorAll('.' + color);
    //add class "dance" to those elements
    for(let index = 0; index < colorSelect.length; index++){
        colorSelect[index].classList.add('dance');
        console.log(colorSelect);
        //remove class
    }
}