//1

function getData (url){
    let result = fetch(url);
    result.then(response => {
            if(response.ok){
            	return response.json();
            }
           throw new Error(`Error: ${response.status}`);
    })
    .then(data =>
        data.forEach(element => {
            let firstChar = element.title[0]
            if(firstChar == 'a')
             console.log(element)
        }))
    .catch(error => console.log(error.message))
}

getData('https://jsonplaceholder.typicode.com/todos');

//2

async function getData (url) {
    try{
        let result = await fetch(url);
        if(result.ok){
            let response = await result.json();
            console.log(result)
                response.forEach(element => {
                let firstChar = element.title[0]
                if(firstChar == 'a')
                    console.log(element)
            })
        }
        else {
            throw new Error(`Error: ${result.status}`);
        }
    } catch(error){
        console.log(error.message)
    }
}

getData('https://jsonplaceholder.typicode.com/todos');

//3-4

let blockA = document.querySelector('.user-a');
let blockAb = document.querySelector('.user-ab');

async function getAsyncData(url, block, stringBeginning) {
    clearBlock(blockA);
    clearBlock(blockAb);
    let result = await fetch(url);
    let response = await result.json();
    let filtered = response.filter(element => element.title.startsWith(stringBeginning));
    filtered.forEach(el => {
        let item = document.createElement('p');
        item.textContent = JSON.stringify(el);
        block.appendChild(item);
    })
};

function clearBlock(block) {
    while(block.firstChild) {
        block.removeChild(block.firstChild)
    }
};
getAsyncData('https://jsonplaceholder.typicode.com/todos', blockA, 'a');
getAsyncData('https://jsonplaceholder.typicode.com/todos', blockAb, 'ab');

let buttonA = document.querySelector('.add-a');
let buttonAb = document.querySelector('.add-ab');
let buttonAll = document.querySelector('.add-all');

buttonA.addEventListener('click', clickA);
function clickA () {getAsyncData('https://jsonplaceholder.typicode.com/todos', blockA, 'a')};

buttonAb.addEventListener('click', clickAb);
function clickAb () {getAsyncData('https://jsonplaceholder.typicode.com/todos', blockAb, 'ab')};

buttonAll.addEventListener('click', clickAll);
function clickAll () {getAsyncData('https://jsonplaceholder.typicode.com/todos', blockA, 'a');
getAsyncData('https://jsonplaceholder.typicode.com/todos', blockAb, 'ab')};
