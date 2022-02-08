let nav = document.querySelector('#navbar')

function menu(){
    nav.classList.toggle('active')
}

window.onscroll = () => {
    nav.classList.remove('active')
}