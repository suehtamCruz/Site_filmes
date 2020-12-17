const $btnMenuOpen = document.querySelector('.btnMenu_open')
const $menu = document.querySelector('.menu-mob')
const $btnMenuClose = document.querySelector('.btnMenu_close')

$btnMenuOpen.addEventListener('click',function(){
    $menu.classList.add('menu-mob_open')    
})


$btnMenuClose.addEventListener('click',function(){
    $menu.classList.remove('menu-mob_open')    
})