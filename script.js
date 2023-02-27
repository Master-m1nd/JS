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
