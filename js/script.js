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

// 동그라미 fadeIn & fadeOut
// fadeOut , fadeIn을 반복하고 싶은데 fadeOut만 실행 된다.
// const lightOdd = document.querySelectorAll('#lightOdd li');
// console.log(lightOdd);
// const lightEven = document.querySelectorAll('#lightEven li');
// console.log(lightEven);

// for(let k = 0; k<lightOdd.length ; k++){

//   let currentOpacityValue = 1;
//   let currentOpacityValueZero = 0;
//   lightOdd[k].style.opacity = currentOpacityValue;

//   const fadeOut = setInterval(() => {
//       if(currentOpacityValue <= 1){
//           currentOpacityValue -= 0.1;
//           lightOdd[k].style.opacity = currentOpacityValue;
//       }else if
//         (currentOpacityValue = currentOpacityValueZero){
//             currentOpacityValueZero += 0.1;
//             lightOdd[k].style.opacity = currentOpacityValueZero;
//         }else{
//           currentOpacityValueZero = 1;
          
//         }
//   }, 200);
// }


// for(let k = 0; k<lightOdd.length ; k++){
//   let currentOpacityValue = 1;
//   lightOdd[k].style.opacity = currentOpacityValue;

//   const fadeOut = setInterval(() => {
//       if(currentOpacityValue <= 1){
//           currentOpacityValue -= 0.1;
//           lightOdd[k].style.opacity = currentOpacityValue;
//       }else{
//           clearInterval(fadeOut);
//       }

//       fadeOut}, 200);
// }

// for(let j = 0; j<lightEven.length ; j++){
//   let OpacityValue = 0;
//   lightEven[j].style.opacity = OpacityValue;

//   const fadeIn = setInterval(() => {
//       if(OpacityValue <= 1){
//           OpacityValue += 0.1;
//           lightEven[j].style.opacity = OpacityValue;
//       }else {
//           clearInterval(fadeIn);
//       }

//   }, 200);
// }


// 곰돌이 들어갔다 나오기
const bearOne = document.querySelector('#bearOne');
console.log(bearOne); 

bearOne.animate(
    [
        {marginLeft:'0vw'},
        {marginLeft :'4vw'},
        {marginLeft:'0vw'}       
    ],
    {
        duration :5000,
        iterations : Infinity
    });

const bearTwo = document.querySelector('#bearTwo');
console.log(bearTwo); 

bearTwo.animate(
    [
        {marginRight:'0vw'},
        {marginRight:'3vw'},
        {marginRight:'0vw'}      
    ],
    {
        duration :5000,
        iterations : Infinity
    });    

// about store & menu 슬라이드

const buttonTwo = document.querySelector('#buttonTwo');
console.log(buttonTwo);
const menuItemsTwo = document.querySelectorAll('body .menuItemsTwo')
console.log(menuItemsTwo);
const buttonOne = document.querySelector('#buttonOne');
console.log(buttonOne);
const  storeItemsOne = document.querySelectorAll('body .storeItemsOne')
console.log(storeItemsOne);

for (let i = 0; i < menuItemsTwo.length; i++) {
}

let index = 1;
buttonTwo.addEventListener('click', function () {
  if (index < menuItemsTwo.length) {
    menuItemsTwo[index].style.opacity = 1;
    menuItemsTwo[index].style.display = "list-item";
    if (menuItemsTwo[index].previousElementSibling !== null) {
      menuItemsTwo[index].previousElementSibling.style.display = "none";
    }
    index += 1;
  } else {
    menuItemsTwo[index - 1].style.display = "none";
    menuItemsTwo[0].style.display = "list-item";
    index = 1;
  }
});

for (let i = 0; i < menuItemsTwo.length; i++) {
}

let k = 1;
buttonOne.addEventListener('click', function () {
  if (k < storeItemsOne.length) {
    storeItemsOne[k].style.opacity = 1;
    storeItemsOne[k].style.display = "list-item";
    if (storeItemsOne[k].previousElementSibling !== null) {
      storeItemsOne[k].previousElementSibling.style.display = "none";
    }
    k += 1;
  } else {
    storeItemsOne[k - 1].style.display = "none";
    storeItemsOne[0].style.display = "list-item";
    k = 1;
  }
});

// shop view 효과
const button = document.querySelectorAll('body .view');
console.log(button);

for(let i = 0; i<button.length ; i++){
  button[i].addEventListener('mouseenter', function(){
    button[i].classList.add('white');
  });
}

for(let i = 0; i<button.length ; i++){
  button[i].addEventListener('mouseleave', function(){
    button[i].classList.remove('white');
  });
}

const back = document.querySelectorAll('body .view-hover');
console.log(back);

for(let k = 0; k<back.length ; k++){
  button[k].addEventListener('mouseenter', function(){
    back[k].classList.replace('hidden','block');
  });
}

for(let k = 0; k<back.length ; k++){
  button[k].addEventListener('mouseleave', function(){
    back[k].classList.replace('block', 'hidden');
  });
}

// smile 움직이기
const smileL = document.querySelector('#smileL');
console.log(smileL);
const smileM = document.querySelector('#smileM');
console.log(smileM);
const smileS = document.querySelector('#smileS');
console.log(smileS);

smileL.animate(
  [
     {transform: 'rotate(0deg)'},
     {transform: 'rotate(20deg)'},
     {transform: 'rotate(0deg)'},
     {transform: 'rotate(-20deg)'},
     {transform: 'rotate(0deg)'}
  ],
  {
      duration :2000,
      iterations : Infinity
  });

  smileM.animate(
    [
       {transform: 'rotate(0deg)'},
       {transform: 'rotate(-20deg)'},
       {transform: 'rotate(0deg)'},
       {transform: 'rotate(20deg)'},
       {transform: 'rotate(0deg)'}
    ],
    {
        duration :2000,
        iterations : Infinity
    });
  smileS.animate(
  [
     {transform: 'rotate(0deg)'},
     {transform: 'rotate(20deg)'},
     {transform: 'rotate(0deg)'},
     {transform: 'rotate(-20deg)'},
     {transform: 'rotate(0deg)'}
  ],
  {
      duration :2000,
      iterations : Infinity
  });


// trans
const trans = document.querySelectorAll('body .trans');
console.log(trans);
const stollen = document.getElementById('stollen');
console.log(stollen);
const cake = document.getElementById('cake');
console.log(cake);
const stollenImg = document.getElementById('stollenImg');
const bag = document.getElementById('bag');
const cakeImg = document.getElementById('cakeImg');
// const imgBox = document.querySelectorAll('body .img-box');
// console.log(imgBox);
const shop = document.querySelectorAll('#shop section');
console.log(shop);
const hireH = document.querySelector('#hire h1');
const hireP = document.querySelector('#hire p');
const carrers = document.querySelector('#hire #carrers');


window.addEventListener('scroll', ()=>{
  if(scrollY > 250) {
    trans[0].style.opacity = 1;
    stollen.style.marginLeft = '20vw';
    stollenImg.style.marginLeft = '20vw';
    bag.style.marginLeft = '20vw';
  }

  if(scrollY > 700) {
    cake.style.marginRight = '30vw';
    cakeImg.style.marginRight = '30vw';
  }
  
  if(scrollY > 1440){
    trans[1].style.opacity = 1;
  }

  if(scrollY > 1900){
    // trans[2].style.opacity = 1;
    // trans[3].style.opacity = 1;
    // trans[4].style.opacity = 1;
    for(let i = 0; i < shop.length; i++){
      setInterval(()=>{
        shop[i].classList.replace('opa-0', 'opa-1');
      }, (500) * (i+1));
    }
  }

  if(scrollY > 3000) {
    trans[2].style.opacity = 1;
    hireH.style.marginTop = '0vh';
    hireP.style.marginTop = '22vh';
    carrers.style.marginTop = '27vh';
  }
});