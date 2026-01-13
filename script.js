const mas = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if(scroll_position > 200){
    nanvar.style.backgroundColor = '#003349';
    nanvar.style.color = '#fff';
  } else {
    nanvar.style.backgroundColor = '#f6f6f6';
    nanvar.style.color = '#000';

  }
});