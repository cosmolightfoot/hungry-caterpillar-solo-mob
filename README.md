Abstract: 

Add an HTML section for a random button
Add a button in the HTML that will cause random colored body segments to trigger
Link the random buttom to JS


settimeout in milliseconds
css "animate rule"
css animations and transitionsn



WE WANT TO PUT THE PREVIOUS NUMBER REMOVED BACK INTO THE INDEX RIGHT AFTER WE PULL THE SECOND NUMBER

FIVE UNIQUE CASES

Initial Was [0,1,2,3,4]
val was set to 0
0 was pulled from the array, outerVal is set to 0 and must be spliced in
The new array is
[1,2,3,4]

[2,3,4] 1,  .splice(0, 0, 0) [0,2,3,4] .splice(outerVal, 0, outerVal)
[1,3,4] 2,  .splice(0, 0, 0) [0,1,3,4] .splice(outerVal, 0, outerVal)
[1,2,4] 3,  .splice(0, 0, 0) [0,1,2,4] .splice(outerVal, 0, outerVal)
[1,2,3] 4,  .splice(0, 0, 0) [0,1,2,3] .splice(outerVal, 0, outerVal)

if(outerVal > val) {
    uniqueRandoms.splice(outerVal--, 0, outerVal)
else {
    uniqueRandoms.splice(outerVal, 0, outerVal);
}

Initial Was [0,1,2,3,4]
val was set to 1
1 was pulled from the array, outerVal is set to 1 and must be spliced in
The new array is
[0,2,3,4]

[2,3,4] 0, .splice(0, 0, 1) [1,2,3,4] .splice(outerVal--, 0, outerVal)
[0,3,4] 2, .splice(1, 0, 1) [0,1,3,4] .splice(outerVal, 0, outerVal)
[0,2,4] 3, .splice(1, 0, 1) [0,1,2,4] .splice(outerVal, 0, outerVal)
[0,2,3] 4, .splice(1, 0, 1) [0,1,2,3] .splice(outerVal, 0, outerVal)

Initial Was [0,1,2,3,4]
val was set to 2
2 was pulled from the array, outerVal is set to 2 and must be spliced in
The new array is
[0,1,3,4]

[1,3,4] 0, .splice(1, 0, 2) [1,2,3,4] .splice(outerVal--, 0, outerVal)
[0,3,4] 1, .splice(1, 0, 2) [0,2,3,4] .splice(outerVal--, 0, outerVal)
[0,1,4] 3, .splice(2, 0, 2) [0,1,2,4] .splice(outerVal, 0, outerVal)
[0,1,3] 4, .splice(2, 0, 2) [0,1,2,3] .splice(outerVal, 0, outerVal)

Initial Was [0,1,2,3,4]
val was set to 3
3 was pulled from the array, outerVal is set to 3 and must be spliced in
The new array is
[0,1,2,4]

[1,2,4] 0, .splice(2, 0, 3) [1,2,3,4] .splice(outerVal--, 0, outerVal)
[0,2,4] 1, .splice(2, 0, 3) [0,2,3,4] .splice(outerVal--, 0, outerVal)
[0,1,4] 2, .splice(2, 0, 3) [0,1,3,4] .splice(outerVal--, 0, outerVal)
[0,1,2] 4, .splice(3, 0, 3) [0,1,2,3] .splice(outerVal--, 0, outerVal)

Initial Was [0,1,2,3,4]
val was set to 4
4 was pulled from the array, outerVal is set to 4 and must be spliced in
The new array is
[0,1,2,3]

[1,2,3] 0, .splice(3, 0, 4) [1,2,3,4] .splice(outerVal--, 0, outerVal)
[0,2,3] 1, .splice(3, 0, 4) [0,2,3,4] .splice(outerVal--, 0, outerVal)
[0,1,2] 2, .splice(3, 0, 4) [0,1,2,4] .splice(outerVal--, 0, outerVal)
[0,2,3] 3, .splice(3, 0, 4) [0,2,3,4] .splice(outerVal--, 0, outerVal)

