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
