//1

fetch('http://127.0.0.1:5500/home-work-data.json')
.then(response => response.json())
.then(data => showAdminName(data));


function showAdminName(data) {
    for(let name in data){
        if(data[name].isAdmin == true){
            console.log(data[name].name)
        }
    }
};

//2

let nikola = {firstName: 'Nikola', lastName: 'Tesla'};
let bob = {firstName: 'Bob'};
let mike = {lastName: 'Smith'};
let michael = {};

let getFullName = function (user) {
    return `${user.firstName} ${user.lastName}`
};

getFullName = new Proxy(getFullName,{
    apply(target, _thisArgs, args) {
        const [user] = args;
        if(user.lastName == undefined && user.firstName == undefined) return 'No name';
        if(user.lastName == undefined) return user.firstName;
        if(user.firstName == undefined) return user.lastName;
        else return target(...args).toUpperCase();
        }
    }
);

console.log(getFullName(nikola));
console.log(getFullName(bob));
console.log(getFullName(mike));
console.log(getFullName(michael));

//3

let users = [
    { name: 'Nikola', age: 18, id: 1 },
    { name: 'Bob', age: 25, id: 2 },
    { name: 'Mike', age: 32, id: 3 },
];

localStorage.setItem(users, JSON.stringify(users));
console.log(users);

function sayHelloToUser(id) {
    let result = users.filter(item => item.id === id).map(item => item.name)
        console.log(`Hello: ${result}`)
};

sayHelloToUser(3);

//4

let input = document.querySelector('input');

window.onload = function() {
    input.value = localStorage.getItem('input')
};

window.onbeforeunload = function() {
    localStorage.setItem('input', input.value)
};
