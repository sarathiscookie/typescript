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

////////////////////////////////////////////////////////
class Student {
    constructor(public fName:string, public lName:string, public age:number) {}

    fullname() {
        return this.fName+' '+this.lName;
    }

    studentAge() {
        return 'I am '+ this.age +' year old.';
    }
}

class Admission extends Student {
    constructor(public fName:string, public lName:string, public age:number, public jDate:string, public tAmount:number, public tDate:string) {
        super(fName, lName, age);
    }

    admissionCost = () => {
        return 'Cost: ' + this.tAmount; 
    }

    admissionCostIncludingHostel = (hostelFee: number) => {
        return this.tAmount + hostelFee;
    }
}

const adObj = new Admission('Peter', 'Smith', 45, '12.04.2020', 130000, '12.03.2020');
console.log(adObj.admissionCost());
console.log(adObj.fullname());
console.log(adObj.studentAge());
console.log(adObj.admissionCostIncludingHostel(20000));