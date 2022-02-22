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