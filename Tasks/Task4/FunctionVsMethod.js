//A function is a block of code written to perform some specific set of tasks. 
// Data passed to a function is explicit.

function func(a, b) { // addition of two numbers
    var sum = a + b;
    return sum;
}
console.log(func(1, 2));

// The function is executed when something calls/invokes it.
// The name may contain letters, digits, dollar signs, and underscore.
// Parameters are listed inside round parenthesis after the name of the function.

// A Method is a property of an object that contains a function definition / value. 
//  Method implicitly passes the object on which it was called.

var employee = { // method - invoked with an object called employee.
    empname: "Rahul",
    department: "sales",
    details: function () {
        return this.empname +
            " works with Department " +
            this.department;
    }
};

console.log(employee.details());
