let modal_header = document.querySelector('.navbar-modal');
let btn_menu = document.querySelector('.menu-burguer');
let btn_close = document.querySelector('.btn-close');
let img_logo =document.querySelector('.img-logo');
let btn_whatsapp = document.querySelector('.img-whatsapp');
let modal_textwhatsapp = document.querySelector('.text-whatsapp')


console.log(btn_menu);
console.log(modal_header);

btn_menu.addEventListener('click', () => {
    modal_header.style.display = 'flex';
    btn_menu.style.display = 'none';
    img_logo.style.width = "120px";
    img_logo.style.height = "120px";
  

})

btn_close.addEventListener('click', () => {
    modal_header.style.display = 'none';
    btn_menu.style.display = 'block';
    img_logo.style.width = "80px";
    img_logo.style.height = "80px";
})

setTimeout(() => {
    btn_whatsapp.style.display = 'block';
    btn_whatsapp.classList.add('show');
    modal_textwhatsapp.style.display = 'block';
}, 5000);

setTimeout(() => {

    modal_textwhatsapp.style.display = 'none';
}, 20000);