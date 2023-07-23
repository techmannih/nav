// const closeButton = document.querySelector('.close-nav');
// const openButton = document.querySelector('.open-nav');
// const nav = document.querySelector('.nav');

// closeButton.addEventListener("click", () => {
//     nav.classList.remove('navigation-open');
// }); 

// openButton.addEventListener("click", () => {
//     nav.classList.add('navigation-open');
// }); 


//////////////
//////////////
// javascript

const get = element => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})