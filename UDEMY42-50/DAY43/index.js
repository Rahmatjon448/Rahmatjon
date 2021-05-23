const ism = prompt("Hello! What is your name!")
const ratingsContainer = document.querySelector('.ratings-container')
const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectRating = 'Statisfed'



ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})


function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}


sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!  ${ism}</strong>
    <br>
    <strong>Fedback: ${selectRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
})