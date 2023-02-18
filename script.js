            // Home work 17
console.log (`You can ignore single and double quotes like this: \\ '\\' \\" \\"`)


alert('Please enter your data');
let userName = prompt("What's your name?", 'Name');
alert(`Your name is: ${userName}`)
let surName = prompt("Enter your surname?", 'Surname');
alert(`Your full name is: ${userName} ${surName}`)
let age= prompt("How old are you?", 'Age');
alert(`Your full name is: ${userName} ${surName}, your age is: ${age}`)
let admin = confirm('Are you admin?');
alert(`Your full name is: ${userName} ${surName}, your age is: ${age}, admin status: ${admin}`);

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