const $btnMenuOpen = document.querySelector('.btnMenu_open')
const $menu = document.querySelector('.menu-mob')
const $btnMenuClose = document.querySelector('.btnMenu_close')
const $container = document.querySelector('.container')

$btnMenuOpen.addEventListener('click',function(){
    $menu.classList.add('menu-mob_open')    
    $container.classList.add('container_down');
})


$btnMenuClose.addEventListener('click',function(){
    $menu.classList.remove('menu-mob_open')    
    $container.classList.remove('container_down');
})