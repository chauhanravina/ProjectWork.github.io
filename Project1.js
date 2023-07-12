

function agedays()
{
var birthyear = prompt('what is your age?');
let agedayss = (2023 - birthyear) * 365;
let h1 =  document.createElement('h1');
var textAnswer = document.createTextNode('You are '+ agedayss + ' days old');
h1.setAttribute('id', 'agedays');
h1.appendChild(textAnswer);
document.getElementById('box-result').appendChild(h1);
}

function reset()
{
    document.getElementById('agedays').remove();
}


 function  catgenerate()
 {
let image = document.createElement('img');
let div = document.getElementById('flex-kitty');
image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
div.appendChild(image);
 }


var all_btn = document.getElementsByTagName('button');
var copyallbtns = [];
for (let i = 0; i < all_btn.length; i++) {
   copyallbtns.push(all_btn[i].classList[1]);
}

console.log(copyallbtns);
function buttoncolorchange(buttonthings)
{
   if(buttonthings.value === 'red')
   {
buttonsred();
   }
   else if (buttonthings.value === 'random')
   {
      buttonsrandom();
   }
   else if (buttonthings.value === 'reset')
   {
      buttonsreset();
   }
   else if (buttonthings.value === 'green')
   {
      buttonsgreen();
   }
}


function buttonsred()
{ 
   for (let i = 0; i < all_btn.length; i++) {
   all_btn[i].classList.remove(all_btn[i].classList[1]);
   all_btn[i].classList.add('btn-danger');
   }
}

function buttonsgreen()
{ 
   for (let i = 0; i < all_btn.length; i++) {
   all_btn[i].classList.remove(all_btn[i].classList[1]);
   all_btn[i].classList.add('btn-success');
   }
}

function buttonsreset()
{ 
   for (let i = 0; i < all_btn.length; i++) {
   all_btn[i].classList.remove(all_btn[i].classList[1]);
   all_btn[i].classList.add(copyallbtns[i]);
   }
}

function buttonsrandom()
{
    let choose = ['btn-primary', 'btn-success','btn-warning', 'btn-danger'];
   for (let i = 0; i < all_btn.length; i++) {
      let random2 = Math.floor(Math.random() * 4);
      all_btn[i].classList.remove(all_btn[i].classList[1]);
      all_btn[i].classList.add(choose[random2]);
   }
}
