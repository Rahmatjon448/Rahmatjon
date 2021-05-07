const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://www.slashgear.com/wp-content/uploads/2020/01/Lenovo-IdeaPad-Creator-5_02.jpg">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum non enim quia? Maiores, consequuntur.'
    profile_img.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2465Q-R1Gnuqe66CNZK3K51Qx7yak1mZk6tTO2I5tEk74oX_vajFgjSKFadTsq2NJIVY&usqp=CAU" alt="">'
    name.innerHTML = 'Rahmatjon Nurmatov'
    date.innerHTML = 'May 07 , 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animeted-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animeted-bg-text'))
}