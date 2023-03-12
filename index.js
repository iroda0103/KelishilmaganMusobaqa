const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const infoText = document.getElementsByClassName("info-text")[0]
const infoText_1 = document.getElementsByClassName("info-text")[1]
const afzallikCard = document.getElementsByClassName("afzallik-card")
sun.addEventListener('click', () => {
    document.querySelector('.darcmode').classList.add('sundark')
    sun.classList.add('activ_darcmode')
    moon.classList.remove('activ_darcmode')
    document.body.classList.add('lighted');

    infoText.classList.toggle("info-text__night")
    infoText_1.classList.toggle("info-text__night")

    for (let i = 0; i < afzallikCard.length; i++){
       afzallikCard[i].classList.toggle("afzallik-card__light")
    }
})
moon.addEventListener('click', () => {
    document.querySelector('.darcmode').classList.remove('sundark')
    moon.classList.add('activ_darcmode')
    sun.classList.remove('activ_darcmode')
    document.body.classList.remove('lighted');
    
    infoText.classList.toggle("info-text__night")
    infoText_1.classList.toggle("info-text__night")
    for (let i = 0; i < afzallikCard.length; i++){
        afzallikCard[i].classList.toggle("afzallik-card__light")
     }  
})