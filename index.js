const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
sun.addEventListener('click', () => {
    document.querySelector('.darcmode').classList.add('sundark')
    sun.classList.add('activ_darcmode')
    moon.classList.remove('activ_darcmode')
    document.body.classList.add('lighted');
})
moon.addEventListener('click', () => {
    document.querySelector('.darcmode').classList.remove('sundark')
    moon.classList.add('activ_darcmode')
    sun.classList.remove('activ_darcmode')
    document.body.classList.remove('lighted');
})