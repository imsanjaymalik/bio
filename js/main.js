const menubtn= document.querySelector('.menu-btn')
const humburger= document.querySelector('.menu-btn__burger');
const nav= document.querySelector('.nav');
const menunav= document.querySelector('.menu-nav');
const navitems= document.querySelectorAll('.menu-nav__item');

let showmenu=false;

menubtn.addEventListener('click',toggleMenu);

function toggleMenu() {
    if(!showmenu){
        humburger.classList.add('open');  
        nav.classList.add('open');
        menunav.classList.add('open');
        navitems.forEach(itme=> itme.classList.add('open'));
        showmenu=true;
    } else {
        humburger.classList.remove('open');
        nav.classList.remove('open');
        menunav.classList.remove('open');
        navitems.forEach(itme=> itme.classList.remove('open'));
        showmenu=false;
    }
}
