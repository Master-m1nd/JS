        //Home work 29

//1

let array = document.querySelectorAll('h2');


let content = 'DOM method';

for(let i=0; i<array.length; i++) {
    if(array[i].textContent == content){
        array[i].textContent += ' description';
    }
}

//2

let array2 = document.querySelectorAll('a');

let ua = '/ua/';

for(let i=0; i<array2.length; i++) {
    if (array2[i].getAttribute('href').includes(ua)) {
        array2[i].style.color = 'red';
        array2[i].textContent = 'link';
        console.log(array2[i]);
    }
}


//3

let list = document.querySelector('ul');
let li1 = document.querySelector('#first');

let li0 = document.createElement('li');
li0.innerHTML = 0;
li0.setAttribute('id', 'null');

list.prepend(li0);


let li2 = document.createElement('li');
li2.innerHTML = 2;
li2.setAttribute('id', 'second');

li1.appendChild(li2);

let li4 = document.createElement('li');
li4.innerHTML = 4;
li4.setAttribute('id', 'fourth');

list.appendChild(li4);

console.log(document.querySelector('ul'));

//4

let a = document.createElement('a');
document.body.appendChild(a);
let h1 = document.querySelector('h1');
a.setAttribute('id', 'link');
a.setAttribute('href', 'https://dom.spec.whatwg.org/');

a.innerHTML = h1.outerHTML;
h1.remove();
console.log(h1.outerHTML);
console.log(document.querySelector('a'));