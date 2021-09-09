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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
console.log("############### Mix of string and number array ##################");
console.log("Example 1");
var anyData = ['jane', 2, 3, 4, 'test'];
console.log(anyData);
console.log("Example 2");
var anydataTwo = ['peter', 'smith', 23, 34, 45, 'joe'];
console.log(anydataTwo);
console.log("########### Generic #############");
function genericFeature(arrayData, noramlData) {
    var mergeDatas = __spreadArray([noramlData], arrayData);
    return mergeDatas;
}
console.log('Example 1: Return number array');
var vehiclesSeries = [123, 121, 120, 124];
var vehicleNewSeries = 1005;
console.log(genericFeature(vehiclesSeries, vehicleNewSeries));
console.log('Example 1: Return string array');
var vehicles = ['Audi', 'Volvo', 'Benz'];
var vehicle = 'BMW';
console.log(genericFeature(vehicles, vehicle));
console.log('############### Class ################');
var StudentAccount = /** @class */ (function () {
    function StudentAccount(fname, lname, age, courses) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.courses = courses;
    }
    StudentAccount.prototype.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return StudentAccount;
}());
var studentDetails = new StudentAccount('Peter', 'Smith', 25, ['angular', 'react', 'typescript']);
console.log(studentDetails);
console.log(studentDetails.fullName());
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
        _this.admissionCost = function () {
            return 'Cost: ' + _this.tAmount;
        };
        _this.admissionCostIncludingHostel = function (hostelFee) {
            return _this.tAmount + hostelFee;
        };
        return _this;
    }
    return Admission;
}(Student));
var adObj = new Admission('Peter', 'Smith', 45, '12.04.2020', 130000, '12.03.2020');
console.log(adObj.admissionCost());
console.log(adObj.fullname());
console.log(adObj.studentAge());
console.log(adObj.admissionCostIncludingHostel(20000));
