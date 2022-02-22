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
