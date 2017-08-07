
/* burguer Header toggle */
document.getElementById('mobile-nav__burgerbutton').onclick = function () {
    document.getElementById('mobile-nav__side-menu-contaner').classList.toggle('menu-hidden');
    document.getElementById('mobile-nav__burgerbutton').classList.toggle('fa-bars');
    document.getElementById('mobile-nav__burgerbutton').classList.toggle('fa-times');
}

