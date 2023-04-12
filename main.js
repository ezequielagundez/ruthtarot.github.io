let modal_header = document.querySelector('.navbar-modal');
let btn_menu = document.querySelector('.menu-burguer');
let btn_close = document.querySelector('.btn-close')


console.log(btn_menu);
console.log(modal_header);
btn_menu.addEventListener('click',()=>{
    modal_header.style.display ='flex';
    btn_menu.style.display ='none';

})

btn_close.addEventListener('click',()=>{
    modal_header.style.display ='none';
    btn_menu.style.display ='block';
})