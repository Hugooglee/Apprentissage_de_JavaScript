const Lebouton = document.getElementById('bouton');
const body = document.body
const titre = document.getElementById('titreP');

Lebouton.addEventListener('click', () => {
    body.style.backgroundColor = 'red'
})
titre.addEventListener('mousemove', () => {
    Lebouton.style.backgroundColor = 'yellow'
})


titre.addEventListener('mousemove', () => {
    body.classList.add('couleurtitre')
})
Lebouton.addEventListener('mousemove', () => {
    body.classList.remove('couleurtitre')
})