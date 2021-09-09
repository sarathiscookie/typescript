console.log("####### Example: Sum of two values. #######");
function sumOfValues(a: number, b: number) {
    return a + b;
}

const result = sumOfValues(5, 2);
console.log(result);

console.log("####### Example: Primitive (number, string, boolean) #######");
let age: number; // or let age: number = 12.5;
age = 12.5;
console.log(age);

let userName: string; // or let userName = 'Jane Doe';
userName = 'Jane Doe';
console.log(userName);

let isAvailable: boolean; // or let isAvailable: boolean = true;
isAvailable = true;
console.log(isAvailable);

console.log("####### Example: Inferred types #######");
console.log("Automatically set type");
let firstName = 'Peter';
console.log(firstName);
let amount = 12.5;
console.log(amount);

console.log("####### Example: Arrays #######");
console.log("If its a string array define type string[]."); 
let gender: string[];
gender = ['Male', 'Female'];
console.log(gender);

console.log("If its number array define type number[].");
let countryCode: number[] = [64, 34, 23, 11, 54];
console.log(countryCode);

console.log("If its boolean array define type boolean[].");
let availability: boolean[] = [true, false];
console.log(availability);

console.log("####### Example: Objects #######");
interface User {
    name: string,
    street: string,
    countryCode: number
};

const user: User  = {
    name: 'Peter',
    street: 'PRA',
    countryCode: 80
};
console.log(user);

console.log("####### Example: Union #######");
console.log("Example 1");
console.log("Here we can define two type of values in a variable");
let val: string | number = 'Welcome to dashboard';
console.log(val + ' (' + typeof(val) + ')');
val = 5;
console.log(val + ' (' + typeof(val) + ')');

console.log("Example 2");
let users: string | string[];
users = ['Jane', 'Joe'];
console.log(users);

console.log("############### Mix of string and number array ##################");
console.log("Example 1");
let anyData:(string | number)[] = ['jane', 2, 3, 4, 'test'];
console.log(anyData);

console.log("Example 2");
let anydataTwo:any[] = ['peter', 'smith', 23, 34, 45, 'joe'];
console.log(anydataTwo); 

console.log("########### Generic #############");
function genericFeature<T>(arrayData:T[], noramlData:T) {
    let mergeDatas = [noramlData, ...arrayData];
    return mergeDatas;
}
console.log('Example 1: Return number array');
let vehiclesSeries = [123, 121, 120, 124];
let vehicleNewSeries = 1005;
console.log(genericFeature(vehiclesSeries, vehicleNewSeries));

console.log('Example 1: Return string array');
let vehicles = ['Audi', 'Volvo', 'Benz'];
let vehicle = 'BMW';
console.log(genericFeature(vehicles, vehicle));

console.log('############### Class ################');
class StudentAccount {
    firstName: string;
    lastName: string;
    age: number;
    courses: string[];

    constructor(fname:string, lname:string, age: number, courses: string[]) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.courses = courses;
    }

    fullName() {
        return this.firstName +' '+ this.lastName;
    }
}

const studentDetails = new StudentAccount('Peter', 'Smith', 25, ['angular', 'react', 'typescript']);
console.log(studentDetails);
console.log(studentDetails.fullName());
//TODO: Leaning classess "Super Calls"