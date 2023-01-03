const menuBtn = document.querySelector('.mobile-button');
const mobileMenu = document.querySelector('.mobile-wrap');
const bodyColor = document.querySelector('body');
const headerColor = document.querySelector('.header')
const menuClose =document.querySelector('.cancel-btn');
function mobileToggle(){
    mobileMenu.classList.toggle('mobile-wrap--active');
    bodyColor.classList.toggle('body--color');
    headerColor.classList.toggle('header--active');
}
function mobileClose(){
    mobileMenu.classList.remove('mobile-wrap--active');
    bodyColor.classList.remove('body--color');
    headerColor.classList.remove('header--active');
}
menuBtn.addEventListener("click", mobileToggle);
menuClose.addEventListener("click", mobileClose);