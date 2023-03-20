//1

let mixin = {
    vat() {return this.price + this.price * 0.2},
    exciseDuty() {return (this.price + this.price * 0.3) + 10},
    singleTax() {return this.price + 1}
}

class Cola {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
Object.assign(Cola.prototype, mixin);
let cocaCola = new Cola('Coca-Cola', 10);

console.log(cocaCola.vat());

class Whiskey {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
Object.assign(Whiskey.prototype, mixin);
let johnWalker = new Whiskey('John Walker', 100);

console.log(johnWalker.exciseDuty());

class Ice {
    constructor(price) {
        this.price = price;
    }
}
Object.assign(Ice.prototype, mixin);
let ice = new Ice(2);

console.log(ice.singleTax());

//2

function uniqueString(string) {
    let words = string.split('; ');
    let set = new Set(words);
    return set;
}
console.log(uniqueString('cherry; orange; cherry; banana; banana'))

//3

let ul = document.querySelector('.shop-list');
let arr = Array.from(ul.children);

let filteredArray = arr.map(function(item){
    return item.textContent
})

let uniqueNames = new Set(filteredArray);

console.log(uniqueNames);

//4

let mike = {name: 'Mike', age: 18};
let bob = {name: 'Bob', age: 25};
let nikola = {name: 'Nikola', age: 32};

let userVisits = new Map();
userVisits.set(mike,0)
          .set(bob,0)
          .set(nikola,0);

function mikeVisits(obj) {userVisits.set(obj, userVisits.get(obj)+1)};
function bobVisits(obj) {userVisits.set(obj, userVisits.get(obj)+1)}; 
function nikolaVisits(obj) {userVisits.set(obj, userVisits.get(obj)+1)}; 

mikeVisits(mike);
mikeVisits(mike);
mikeVisits(mike);
bobVisits(bob);
nikolaVisits(nikola);
nikolaVisits(nikola);

console.log(userVisits.get(mike));
console.log(userVisits.get(bob));
console.log(userVisits.get(nikola));