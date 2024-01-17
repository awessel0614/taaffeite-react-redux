//exploring some new syntax here :)


let colors = ['orange', 'green', 'magenta'];
// .push modifies the original array
colors.push('purple');  //this works for vanilla javascript, but it's NOT okay for redux!

//Make a copy of the array with a new item
//the  '...colors' part is called a spread operator
let colorsCopy = [...colors, 'purple'];

console.log('colors', colors);
console.log('colorsCopy', colorsCopy);

let person = { firstName: 'Chris', lastName: 'Test' };

let personCopy = {...person, lastName: 'Black'}; //you can put as many properties as you want on this object


