'use strict'

        //Home work 26

//1

let car = {
    type: 'electronic',
    wheels: 4,
}

let sportCar = {
    doors: 2
}
Object.setPrototypeOf(sportCar, car);

let passengerCar = {
    doors: 4
}
Object.setPrototypeOf(passengerCar, car);


let toyCar = Object.create(sportCar);
toyCar.type ='toy';


console.log(sportCar.type);
console.log(passengerCar.wheels);
console.log(toyCar.type);

//2

let employees = {
    wallet: {},
    pay(month, sum) {
        this.wallet[month] = sum;
    },
}

let frontendDeveloper = {
    name: 'Mike',
}
Object.setPrototypeOf(frontendDeveloper, employees);
frontendDeveloper.pay('june', 2000);

console.log('frontendDeveloper:', frontendDeveloper.wallet.june);

let backendDeveloper = {
    name: 'Bob',
}
Object.setPrototypeOf(backendDeveloper, employees);
backendDeveloper.pay('june', 1500);

console.log('backendDeveloper:', backendDeveloper.wallet.june);

//3

function User(name, age) {
    this.name = name;
    this.age = age
}

let user_1 = new User('Mike', 18);
let user_2 = new user_1.constructor('Bob', 25);

console.log(user_2);

//4

function UserType (name) {
    for(let i = 0; i < name.length; i++) {
        this[i] = name[i];
        if(i + 1 == name.length) {
            Object.defineProperty(this, 'length', {
                enumerable: true, 
                writable: false,
                configurable: true,
                value: i + 1
            });
        }
    }
}


let admins = new UserType (['Mike', 'Bob', 'Nikola']);
admins.join = Array.prototype.join;

console.log(admins.join('; '));

        //Home work 25

//1

const user = {
    name: 'Emma',
    age: 21,
    id: 1,
}
Object.defineProperty(user, 'name', {
    writable: true,
    enumerable: false,
    configurable: false
});
Object.defineProperty(user, 'age', {
    writable: true,
    enumerable: false,
    configurable: false
});
Object.defineProperty(user, 'id', {
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
console.log(Object.getOwnPropertyDescriptor(user, 'age'));
console.log(Object.getOwnPropertyDescriptor(user, 'id'));

//2

let dataBase = {
    dbName: 'user',
    dbType: 'MySQL'
}

let configurateDB = {
    token: '123',
    password: '567',
    user: 'admin'
}

Object.freeze(dataBase);
dataBase.dbName = 'Dean';
console.log(dataBase.dbName);

Object.seal(configurateDB);
delete configurateDB.user;
console.log(configurateDB.user);

//3

let salaries = {
    frontend: 2000,
    backend: 1500,
    design: 1000,
}
Object.defineProperty(salaries, 'sum', {
    get() {
        let sum = 0;
        for (salary in this) {
            sum += this(salary);
        }
        console.log(sum);
    },
});
Object.defineProperty(salaries, 'addSalaries', {
    set(inputValue){
        inputValue.forEach((item)=>{
            splitedValue = item.split(': ')
            key = splitedValue[0];
            value = splitedValue[1];
            this[key] = +value;
        })
    },
    enumerable: false
});
salaries.addSalaries = ['frontend: 2500', 'backend: 1750', 'design: 1300', 'manager: 800'];
console.log(salaries);

//4

let user = {
    name: 'Mike',
    surname: 'Davids',
    age: 25,
}
Object.defineProperty(user, 'userInfo', {
    get() {
        let userArray = [];
        for(let key in user){
            userArray.push(`${key} : ${user[key]}`);
        }
        console.log(userArray);
    }, enumerable: false
});

user.userInfo;
user.login = 'MK_18';
user.userInfo;

        //Home work 24

//1-3

class User {
    #name;
    constructor(name, login, age, newName, password) {
        this.#name = name;
        this.login = login;
        this.age = age;
        this.newName = newName;
        this.password = password;
    }
    getName(isAdmin) {
        if (isAdmin) {
            if (this.#name !== '' || this.login !== '') {
                return this.#name || this.login;
            }
        }
        else {
            return ('Permission denied');
        }
    }
    ChangeName(newName, password) {
        if(password == '123') {
            return (`Name changed from ${this.#name} to ${newName}`)
        }
        else {
            return   ('Permission denied')
        } 
    }
}

let user1 = new User('Mike', 'MK_18', 18);
let user2 = new User('', 'NRG', 22);

console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

console.log(user1.getName(true));
console.log(user2.getName(true));
console.log(user2.getName(false));

console.log(user1.ChangeName('Bill', '123'));

//5

class newUser {
    #phone;
    constructor(name,phone) {
        this.name = name;
        this.#phone = phone;
    }
    getPhone(isAdmin) {
        if(isAdmin == false) {
        let spliting = [];
        spliting = this.#phone.split('-');
        spliting[1] = '***';
        spliting[2] = '***';
            return  spliting.join('-');
        }
        else {
            return `${this.#phone}`
        }
    }        
}

let newUser1 = new newUser ('Mike', '067-888-88-99');
let newUser2 = new newUser ('Tom', '099-888-88-99');

console.log(newUser1.getPhone(false));
console.log(newUser1.getPhone(true));
console.log(newUser2.getPhone(false));
console.log(newUser2.getPhone(true));

        //Home work 23

//1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = (arr) => (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));

console.log(sum(arr));

//2

const deepCount = (arr = []) => {
    return arr
    .reduce((acc, val) => {
       return acc + (Array.isArray(val) ? deepCount(val) : 0);
    }, arr.length);
 };
 console.log(deepCount([1, 2, [3]]));

//3

let employees = {
    development: {
        backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
        fronted: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
    },
    sales: {
        marketing: {
            internetMarketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
            promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
        },
        sellers: [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
    },
    designer: [{name: 'Kate', salary: 1800}]
}

function sumArraySalaries() {
    let sum = 0;
    return function sumSallary(obj) {
        for(let key in obj) {
           if (Array.isArray(obj[key])) {
             obj[key].forEach(employees => sum += employees.salary);
            }
            else {
             sumSallary(obj[key]);
            }
        }
        console.log(sum);
        return sum;
    }   
}   

console.log(sumArraySalaries()(employees));

//4

let arr1 = [2, 15, 7, 3];

let arr2 = [9, 3, 17, 12, 4, 8];

let arr3 = [6, 11, 16, 15, 11];

let countArray = [...arr1, ...arr2, ...arr3];

console.log(Math.max(...countArray));

        //Home work 22
       
//1

let array = ['Mike', 'Nikola', 'Tom'];
console.log(array[2]);

array[1] = 'Alex';
console.log(array);

array.splice(1, 2);
console.log(array);

console.log(array.length);

//2

let a = [5, 3, -4, 25, 32, -16, 6];

let sumFirstArray = 0;
for(let i = 0; i < a.length; i++)
sumFirstArray  += a[i];

console.log(sumFirstArray);

let b = [21, -30, 9, 5, 12, -19, 5, 25];

let sumSecondArray = 0;
for(let i = 0; i < b.length; i++)
sumFirstArray  += b[i];

console.log(sumSecondArray);

function comparingArrays  ()  {
    if (sumFirstArray > sumSecondArray) {
        console.log('a > b')
    }
    else if (sumFirstArray < sumSecondArray) {
        console.log('a < b')
    }
    else {
        console.log('a == b')
    }
}

comparingArrays ();

//3

let phrase = 'I am learning JavaScript right now';
let phraseArray = [];

phraseArray = phrase;


console.log(phraseArray.split(' '));
console.log(phraseArray.split(' ')[3]);

//4

let a = [5, 3, 8, 5, 3, 2, 1, 2];


let b = [];

a.forEach((numbers) => {
    if (b.indexOf(numbers) === -1) {
        b.push(numbers)
    }
});

console.log(b);

//5

let users =[{id:1, age:17},
            {id:2, age:18},
            {id:3, age:19},
            {id:4, age:21},
            {id:5, age:17},
            {id:6, age:20},
            {id:7, age:25}
        ];

let userFilter = users.filter(user => user.age > 18 && user.age < 21);
console.log(userFilter);

let chosenId = [];
userFilter.forEach((user) => {
    chosenId.push(user.id)
})

console.log(chosenId);

       
       //Home work 21

//1

let car = {
    model: 'Maserati',
    year: 2013,
    color: 'red',
    signal() {
        console.log('wroom! wroom!');
    }
}

car.color = 'silver';
car.type = 'fuel engine';


console.log(car);
car.signal();

//2

let salaries = {
    fronted: 12000,
    backend: 10000,
    designer: 8000,
    dayPay() {
        console.log('We must pay salary on Tuesday!');
    },
    total() {
        let sum = 0;
        for (let key in salaries) {
            if (typeof salaries[key] == 'number' ) {
                sum += salaries[key];
            }
        }
        console.log(sum);
    }
}

salaries.manager = 5000;

salaries.total();

//3 

function pcInfo (brand, system, cost) {
    this.brand = brand;
    this.system = system;
    this.cost = cost;
}

let dell = new pcInfo('Dell', 'Windows', 800);
let apple = new pcInfo('Apple', 'MAC OS', 1700);

console.log(dell);
console.log(apple);

//4

let tasks = {
    Vasyl: {
        status: 'done',
        title: 'to solve bags in header',
    },
    Nadya: {
        status: 'new',
        title: 'create the scatch of background picture',
    },
    Emma: {
        status: 'in progress',
        title: 'make a model of web site',
    }
}

let taskName = prompt('Enter your name please');

while(tasks.hasOwnProperty(taskName)){
    taskName = prompt('This name is aready take. Please, choose another name to enter')
};

let taskStatus = prompt('Enter the status of your task (new, proceeding or done)');

while(taskStatus !== 'new' && taskStatus !== 'proceeding' && taskStatus !== 'done' ) {
    taskStatus = prompt ('Write the correct task status please (new, proceeding or done)')
};

let taskTitle = prompt('Enter the tilte of task')

tasks[taskName] = {status: taskStatus, title: taskTitle};

console.log(tasks);

        //Home work 20

//1

    let a = prompt('Enter first number', '1');
    let b = prompt('Enter second number', '2');

function maxNumber (a, b) {
    if (+a > +b) {
        alert(a)
    }

    else if (+a < +b){
        alert(b)
    }
    
    else if (+a == +b) {
        alert('a = b')
    }

    else{
        alert('Incorrect numbers')
    }
}
alert(maxNumber(a, b));

//2

function revers(number) {
    number = prompt('enter the number')
    if (+number > 0) {
        alert(-(+number))
    }
    else if (+number < 0) {
        alert(+number * (-1))
    }
    else if(+number == 0) {
        alert(+number)
    }
    else {
        alert('This is not a number')
    } 
}

alert(revers());

//3

function plusThree(number, count) {
    number = prompt('Enter the number please');
    count = prompt('Enter the count number for plusing to first number');
    alert (+number + (3* +count))
}

alert(plusThree());

//4


function getMetric(metric, km, m, cm) {
    km = prompt('Enter the number of kilometres');
    metric = prompt('Enter the measurement into which you want to convert the kilometer value m or cm');

    if (metric == 'm') {
        alert(kmToM(km));
    }
    else if (metric == 'cm') {
        alert(kmToCm(km));
    }
    else {
        alert('You enter incorrect parameters')
    }
}

function kmToM(km) {
    alert(+km * 1000)
}

function kmToCm(km) {
    alert(+km * 100000)
}

getMetric();


        //Home work 19

//1

let personAge = prompt("How old are you?", 'Age');

if(personAge <= 17) {
    confirm('Do you stady at school?')
}
else if(personAge > 17 && personAge < 25) {
    confirm('Do you study at university?')
}
else if(personAge > 25 && personAge < 60) {
    confirm('Do you have a job?')
}
else {
    confirm('What are you doing?')
}

//2

let displayProperty = prompt('Guess the display property', 'Property');

switch(displayProperty){
    case 'block':
        alert('display:block');
        break;
    case 'flex':
        alert('display:flex');
        break;
    case 'grid':
        alert('display:grid' );
        break;
    case 'inline':
        alert('display:inline' );
        break;
    case 'none':
        alert('display:none');
        break;
    default:
        alert("Set 'display: inline-block;'");
 }

 //3

let numbers = prompt('Please enter the number', '1');

while(true) {
    alert(`${numbers} by 12 equals ${+numbers*12}`) 
    if (numbers >= 0) break;
    numbers = prompt('Your number is incorect please enter correct number', '1') 
    if(numbers >= 0 || numbers < 0 && +numbers == NaN);
}

 //4

 for (let i = 2; i < 50; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
 }        
     
     
     //Home work 18

let firstMonthSalary = prompt("Enter first month salary?", '1');

let secondMonthSalary = prompt("Enter second month salary?", '2');

let total = Number(firstMonthSalary) + Number(secondMonthSalary);

alert(`Your salary for 2 month is: ${total}$`);

let totalPlus = total + 1;

alert(`Your have an extra bonus! Your total salary was: ${total}$ It's increase for 1$ and now it is: ${totalPlus}$`);

let minSalary = 2000;

if (totalPlus < minSalary) alert('I`m out')
if (totalPlus >= minSalary) alert('I`m ready to work')



        // Home work 17

console.log (`You can ignore single and double quotes like this: \\ '\\' \\" \\"`)


alert('Please enter your data');
let userName = prompt("What's your name?", 'Name');
alert(`Your name is: ${userName}`)
let surName = prompt("Enter your surname?", 'Surname');
alert(`Your full name is: ${userName} ${surName}`)
let age = prompt("How old are you?", 'Age');
alert(`Your full name is: ${userName} ${surName}, your age is: ${age}`)
let admin = confirm('Are you admin?');
alert(`Your full name is: ${userName} ${surName}, your age is: ${age}, admin status: ${admin}`);
