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

  if(scrollY > 2100){
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