// 꽃 움직이기
const flowerOne = document.querySelector('#flowerOne');
const flowerTwo = document.querySelector('#flowerTwo');
const flowerThree = document.querySelector('#flowerThree');
const flowerFour = document.querySelector('#flowerFour');
const flowerFive = document.querySelector('#flowerFive');

console.log('flowerOne');

flowerOne.animate(
    [
       {transform: 'rotate(0)'},
       {transform: 'rotate(360deg)'}
    ],
    {
        duration :20000,
        iterations : Infinity
    });

    flowerTwo.animate(
      [
         {transform: 'rotate(0)'},
         {transform: 'rotate(-360deg)'}
      ],
      {
          duration :20000,
          iterations : Infinity
      });

    flowerThree.animate(
      [
         {transform: 'rotate(0)'},
         {transform: 'rotate(360deg)'}
      ],
      {
          duration :20000,
          iterations : Infinity
      });

    flowerFour.animate(
       [
         {transform: 'rotate(0)'},
         {transform: 'rotate(360deg)'}
       ],
       {
          duration :20000,
          iterations : Infinity
        });       
   flowerFive.animate(
      [
         {transform: 'rotate(0)'},
         {transform: 'rotate(-360deg)'}
       ],
      {
         duration :20000,
         iterations : Infinity
       }); 

// click me! 움직이기
const clickMe = document.querySelector('#clickme');
console.log('clickMe');

clickMe.animate(
    [
        {bottom:'18vh'},
        {bottom :'19vh'},
        {bottom :'18vh'}       
    ],
    {
        duration :1500,
        iterations : Infinity
    });

// 메뉴 곰돌이 클릭 시 메뉴
const sugarBear = document.querySelector('#sugarbear');
console.log(sugarBear);
const mainMenu = document.querySelector('#main-menu');
console.log(mainMenu);
const insa = document.querySelector('#insa');
console.log(insa);


sugarBear.addEventListener('click', function(){
    mainMenu.classList.toggle('hidden');
    insa.classList.toggle('hidden');
    mainMenu.animate([
        {
          opacity:0,
          width:"0vw"
        },
        { 
          opacity:1,
          width:"50vw"
        }
      ], {
        duration: 1000,
        fill:"forwards"
      });

      insa.animate([
        {
          opacity:0,
        },
        { 
          opacity:1,
        }
      ], {
        duration: 1000,
        fill:"forwards"
      });
});


// insa typing 

text = "Welcome to the cafeknotted world..♥"

let i = 0;
function typing(){
  if(i < text.length){
    document.getElementById('insa').innerHTML += text.charAt(i);
    i++;

    setTimeout(typing, 80);
  }
}

typing();