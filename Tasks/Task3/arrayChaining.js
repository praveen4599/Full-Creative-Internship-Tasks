const numbers = [1, -2, 2, 3];

const items = numbers
    .filter(n => n > 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);

for (const x in items) {
    console.log(items[x]);
}

const sum = numbers.reduce((a, c) => {

    return a + c;
}, 1); // initialize the value of an accumulator as 1.

console.log(sum); // logs 5

