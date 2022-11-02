
/*
queremos agregar la clase active a showcase y a toggle*/
const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  showcase.classList.toggle('active')
})

/*CHANGE BACKGROUND COLOR */

const colors = ["aqua", "lightgray", "green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn-color');
/*const color = document.querySelector('.color');*/

btn.addEventListener('click', function(){
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  
  document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
