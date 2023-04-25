const functions = require('./function');

test('Add 2 + 2 to equal to 4', () => {

    expect(functions.add(2,2)).toBe(4);
});

test('Add 2 + 2 to NOT equal 5', () => {

    expect(functions.add(2,2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {

    expect(functions.isNull()).toBeNull();
});
 
// Basically to be is for the primitive types 

// toEqual
test('User should be Brad Traversy object', () => {

    expect(functions.createUser()).toEqual({ 
        firstName: 'Brad', 
        lastName: 'Traversy' 
    });
});

// Less than and Greater than
test('Should be under 1600', () => {

    const load1 = 800;
    const load2 = 700;
    expect((load1 + load2) < 1600);
});

// Regex
test('There is no I in team', () => {

    expect('teami').not.toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', () => {

    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});