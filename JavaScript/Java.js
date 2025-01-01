//Array
let numbers = [10, 20, 30, 40, 50];

console.log(numbers[2]);  

numbers.push(60);
console.log(numbers); 

numbers.unshift(5);
console.log(numbers); 

let removedElementPop = numbers.pop();
console.log(numbers); 
console.log(removedElementPop); 

let removedElementShift = numbers.shift();
console.log(numbers); 
console.log(removedElementShift); 


//Object
let person = {
    name: 'Ali',
    age: 25,
    city: 'Cairo',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); 
console.log(person['age']); 

person.greet(); 

//Function
// تعريف مصفوفة تحتوي على كائنات (Objects)
let users = [
    { name: 'Ali', age: 25, city: 'Cairo' },
    { name: 'Sara', age: 28, city: 'Amman' },
    { name: 'Ahmed', age: 23, city: 'Gaza' }
];

// دالة لإظهار معلومات كل مستخدم
function greetUsers(usersArray) {
    usersArray.forEach(function(user) {
        console.log(`Hello, my name is ${user.name}, I am ${user.age} years old and I live in ${user.city}.`);
    });
}

greetUsers(users);


