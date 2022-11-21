
"use strict";
let arrList = [];
let input = document.querySelector('form input');
let btn = document.querySelector('form input[type="button"]');

let ul = document.querySelector('ul');

let printBtn = document.querySelector('#print');

console.log(input);

btn.addEventListener('click', afficherListe);


printBtn.addEventListener('click', ()=>{

    const link = printBtn;
    // const content = document.querySelector("textarea").value;
    const content = arrList.toString();
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "./liste.txt";
    
    link.click();
    console.log(link);
    URL.revokeObjectURL(link.href);
});

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
 