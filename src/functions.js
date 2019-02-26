function bodySegments(color) {
    const bodySegment = document.createElement('span');
    let numberOfSegments = document.querySelectorAll('.body-segment').length;
    bodySegment.classList.add(color);
    bodySegment.classList.add('body-segment');
    if(numberOfSegments < 10) {
        canvasNode.appendChild(bodySegment);
    }
}
export default bodySegments(color);
sdfgsdfg