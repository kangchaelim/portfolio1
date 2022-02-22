// about store & menu 슬라이드
const buttonTwo = document.querySelector('#buttonTwo');
console.log(buttonTwo);
const menuItemsTwo = document.querySelectorAll('body .menuItemsTwo')
console.log(menuItemsTwo);
const buttonOne = document.querySelector('#buttonOne');
console.log(buttonOne);
const  storeItemsOne = document.querySelectorAll('body .storeItemsOne')
console.log(storeItemsOne);
const clickOne = document.querySelector('#buttonOne button');
const clickTwo = document.querySelector('#buttonTwo button');

// for (let i = 0; i < menuItemsTwo.length; i++) {
// }

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

// click! animation
clickTwo.animate(
  [
     {transform: 'scale(1)'},
     {transform: 'scale(1.1)'},
     {transform: 'scale(1)'},
  ],
  {
      duration : 900,
      iterations : Infinity
  });

  clickOne.animate(
    [
       {transform: 'scale(1)'},
       {transform: 'scale(1.1)'},
       {transform: 'scale(1)'},
    ],
    {
        duration : 900,
        iterations : Infinity
    });