// Convert an object into an array.

// The Object.keys() method returns an array of a given object's own enumerable property names,
// iterated in the same order that a normal loop would.

// Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object.
// The ordering of the properties is the same as that given by looping over the properties of the object manually.
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

// Object:
const items = {
  eggs: 12,
  apples: 5,
  milk: 1,
};

console.log('\n');
console.log(items); // Returns object

console.log('\n');

console.log(Object.keys(items)); // Returns an array of the keys
console.log(Object.values(items)); // Returns an array of the values
console.log(Object.entries(items)); // Returns BOTH keys and values in an array

// Adapted from: https://www.samanthaming.com/tidbits/76-converting-object-to-array/
