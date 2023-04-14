// the method is immediately called with parentheses (). But it doesn’t work correctly!
//As you can see, the call results in an error, because the value of "this" inside the call becomes undefined.

let user = {
    name: "John",
    hi() {
        console.log(`Hi ${this.name}`);
    },
    bye() {
        console.log("Bye");
    },
};

user.hi() //works fine

// now let's call user.hi or user.bye depending on the name

// (user.name == "John" ? user.hi : user.bye)(); // Error!

// put these operations on separate lines, then this will be lost for sure or else this will passed

let hi = user.hi;
hi(); // It gives reference error