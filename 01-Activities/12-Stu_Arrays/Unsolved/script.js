// WRITE YOUR CODE HERE
var studentName =['Ron', 'Micah', 'Jess', 'Louis']

console.log(studentName);
console.log('Welcome to the class ' + studentName[0]);
console.log('Welcome to the class ' + studentName[1]);
console.log('Welcome to the class ' + studentName[2]);
console.log('Welcome to the class ' + studentName[3]);

studentName[0]='Gone';

console.log(studentName[0]);

if(studentName !== 'Ron')
    console.log('This student is gone');

//One way to find and print last element in array
let lastElement=studentName[studentName.length-2];

console.log(lastElement);

//Another way to find and print last element in an array
console.log(`The last student in the list is: ${studentName[studentName.length-1]}`);