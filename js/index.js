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
const solutionsGrid = document.querySelector('.solutions-grid');
const solutionsBtn = document.querySelector('.solutions-btn');
const solutionsHide =document.querySelector(".solutions-btn__text__hide");
const solutionsShow =document.querySelector(".solutions-btn__text__show");
function solutionsToggle(){
    solutionsGrid.classList.toggle('solutions-grid--show');
    solutionsHide.classList.toggle('solutions-btn__text--show');
    solutionsShow.classList.toggle('solutions-btn__text--hide');
}
solutionsBtn.addEventListener("click",solutionsToggle);