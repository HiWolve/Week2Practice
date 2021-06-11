/*
    Character count:
    Write a function that takes in a string and returns an object that stores each character's count
    with characters as keys and the number of occurrences as values.

    console.log(characterCount('mississippi')); // prints {m: 1, i: 4, s: 4, p: 2}
    console.log(characterCount('cat')); // prints {c: 1, a: 1, t: 1}
    console.log(characterCount('What time is it?')); // prints {W: 1, h: 1, a: 1, t: 3, ' ': 3, i: 3, m: 1, e: 1, s: 1, '?': 1}

*/

function characterCount(string) {
    let obj = {};
    let strArr = string.split("");
    for (key in strArr) {
        let letter = strArr[key];
        let sum = 1;
        if (obj[letter] === undefined) {
            obj[letter] = sum;
        } else { obj[letter] += 1 }
    }
    return obj;
    console.log(obj);

}

console.log(characterCount('mississippi'))
console.log(characterCount('cat'))
console.log(characterCount('What time is it?'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = characterCount;
} catch (e) {
    module.exports = null;
}
