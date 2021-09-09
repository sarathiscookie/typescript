var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
////////////////////////////////////////////////////////
var Student = /** @class */ (function () {
    function Student(fName, lName, age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    Student.prototype.fullname = function () {
        return this.fName + ' ' + this.lName;
    };
    Student.prototype.studentAge = function () {
        return 'I am ' + this.age + ' year old.';
    };
    return Student;
}());
var Admission = /** @class */ (function (_super) {
    __extends(Admission, _super);
    function Admission(fName, lName, age, jDate, tAmount, tDate) {
        var _this = _super.call(this, fName, lName, age) || this;
        _this.fName = fName;
        _this.lName = lName;
        _this.age = age;
        _this.jDate = jDate;
        _this.tAmount = tAmount;
        _this.tDate = tDate;
        return _this;
    }
    Admission.prototype.admissionCost = function () {
        return 'Cost: ' + this.tAmount;
    };
    Admission.prototype.admissionCostIncludingHostel = function (hostelFee) {
        return this.tAmount + hostelFee;
    };
    return Admission;
}(Student));
var adObj = new Admission('Peter', 'Smith', 45, '12.04.2020', 130000, '12.03.2020');
console.log(adObj.admissionCost());
console.log(adObj.fullname());
console.log(adObj.studentAge());
console.log(adObj.admissionCostIncludingHostel(20000));
