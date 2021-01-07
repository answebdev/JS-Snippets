// Use the concat() method to join two or more arrays.
// This does not change the existing arrays.
// It returns a new array, containing the values of the joined arrays.

var drinks = ['coffee', 'tea'];
var food = ['pizza', 'chicken', 'fruit'];
var items = drinks.concat(food);

console.log(items);

var drinks = ['cofee', 'tea'];
var food = ['pizza', 'chicken', 'fruit'];
var owner = ['John'];
var total = owner.concat(drinks, food);

console.log(total);
