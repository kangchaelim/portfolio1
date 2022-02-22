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