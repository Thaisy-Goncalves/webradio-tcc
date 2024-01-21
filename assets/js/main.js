const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId) 


    // valida se as variaveis existem
    if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
            // adiciona a classe show-nav a tag nav, ou seja, mostra a nav
            nav.classList.toggle('show-nav')
            // adiciona a classe rotate ao toggle, ou seja, rotaciona o toggle
            toggle.classList.toggle('bx-x')
            // adiciona padding ao body
            bodypd.classList.toggle('body-pd')
            // adiciona padding ao header
            headerpd.classList.toggle('body-pd')

        })
    }
}

showNavbar('header-toggler', 'nav-bar', 'body-pd', 'header')

// Link active color
const linkColor = document.querySelectorAll('.nav_link')

function colorLink() {
    if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}

linkColor.forEach(l => l.addEventListener('click', colorLink))