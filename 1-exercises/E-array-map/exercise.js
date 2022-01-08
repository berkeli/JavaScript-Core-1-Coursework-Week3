// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

const numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

const numbers1 = numbers.map(function(e) {
    return e * 100;
})

const numbers2 = numbers.map((e) => {
    return e * 100;
})

const numbers3 = numbers.map((e) => e * 100);

const numbers4 = numbers.map(e => e * 100);