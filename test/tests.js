
const test = QUnit.test;


var uniqueRandoms = [];
var numRandoms = 5;
function makeUniqueRandom() {
    // refill the array if needed
    if(uniqueRandoms.length === 0) {
        for(var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];

    // now remove that value from the array
    uniqueRandoms.splice(index, 1);

    return val;
}

test('seeing if this function will return random numbers', function(assert) {
    const testNumber = 20;
    const results = randomTest(testNumber);
    const expected = true;
    assert.equal(results, expected);
});
test('seeing if this makeUniqueRandom will return any number', function(assert) {

    const results = makeUniqueRandom();
    const expected = true;
    assert.equal(results, expected);
});