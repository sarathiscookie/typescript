console.log("####### Example: Sum of two values. #######");
function sumOfValues(a, b) {
    return a + b;
}
var result = sumOfValues(5, 2);
console.log(result);
console.log("####### Example: Primitive (number, string, boolean) #######");
var age; // or let age: number = 12.5;
age = 12.5;
console.log(age);
var userName; // or let userName = 'Jane Doe';
userName = 'Jane Doe';
console.log(userName);
var isAvailable; // or let isAvailable: boolean = true;
isAvailable = true;
console.log(isAvailable);
console.log("####### Example: Inferred types #######");
console.log("Automatically set type");
var firstName = 'Peter';
console.log(firstName);
var amount = 12.5;
console.log(amount);
console.log("####### Example: Arrays #######");
console.log("If its a string array define type string[].");
var gender;
gender = ['Male', 'Female'];
console.log(gender);
console.log("If its number array define type number[].");
var countryCode = [64, 34, 23, 11, 54];
console.log(countryCode);
console.log("If its boolean array define type boolean[].");
var availability = [true, false];
console.log(availability);
console.log("####### Example: Objects #######");
;
var user = {
    name: 'Peter',
    street: 'PRA',
    countryCode: 80
};
console.log(user);
console.log("####### Example: Union #######");
console.log("Example 1");
console.log("Here we can define two type of values in a variable");
var val = 'Welcome to dashboard';
console.log(val + ' (' + typeof (val) + ')');
val = 5;
console.log(val + ' (' + typeof (val) + ')');
console.log("Example 2");
var users;
users = ['Jane', 'Joe'];
console.log(users);
