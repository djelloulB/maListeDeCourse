"use strict";
let arrList = [];
let input = document.querySelector('form input');
let btn = document.querySelector('form input[type="button"]');

let ul = document.querySelector('ul');

console.log(input);

btn.addEventListener('click', afficherListe);


function afficherListe(){
    let entry = input.value;
    addItem(entry);
    
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = entry;
}

function addItem(item){
    arrList.push(item);
};
    // for( let i = 0; i < arrList.length; i++){
    //     console.log(arrList[i]);
    // }