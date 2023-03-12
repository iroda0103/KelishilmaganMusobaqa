const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const suns = document.querySelector('.suns');
const moons = document.querySelector('.moons');
function ligth(){
    document.querySelector('.darcmode').classList.add('sundark')
    sun.classList.add('activ_darcmode')
    moon.classList.remove('activ_darcmode')
    suns.classList.add('d-none')
    moons.classList.remove('d-none')
    document.body.classList.add('lighted');
}
function darc(){
    document.querySelector('.darcmode').classList.remove('sundark')
    moon.classList.add('activ_darcmode')
    sun.classList.remove('activ_darcmode')
    suns.classList.remove('d-none')
    moons.classList.add('d-none')
    document.body.classList.remove('lighted');
}
sun.addEventListener('click', () => {
   ligth() 
})
moon.addEventListener('click', () => {
   darc()
})
suns.addEventListener('click', (e) => {
    ligth() 
    console.log('dkfjskfjk','suns',e)
 })
 moons.addEventListener('click', (e) => {
    darc()
    console.log('darckkkkkkkk',e.target)
 })




//  Modal 
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}