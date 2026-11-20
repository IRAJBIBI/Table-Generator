const number = document.querySelector('#number');
const btn = document.querySelector('#button');
const length = document.querySelector('#length');
const reset = document.querySelector('#reset');
const Theme = document.getElementById('theme');


const textarea = document.querySelector('textarea');
var num;
var tblLength;

btn.addEventListener('click' , ()=>{
    textarea.value = "";
    num = Number(number.value);
    tblLength = Number(length.value);


    if(num == 0 || tblLength == 0)
    {
        textarea.value = "Please Enter Number And Length properly"; 
    }else{

    for(let i = 1; i<= tblLength ;i++)
    {
        textarea.value += num + " * " + i + " = " + num * i +"\n";
    }
}});

btn.addEventListener('click' , ()=>{
        textarea.style.background = "grey";
        textarea.style.color = "black";
});

reset.addEventListener('click' , () =>{
    number.value = "";
    length.value = "";
    textarea.value = "";
    textarea.style.background = "white";
})






        

