const functions = require('./function');

test('Add 2 + 2 to equal to 4', () => {

    expect(functions.add(2,2)).toBe(4);
});

test('Add 2 + 2 to NOT equal 5', () => {

    expect(functions.add(2,2)).not.toBe(5);
});

test('Should be null', () => {

    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {

    expect(functions.checkValue(2)).toBeFalsy();
});
