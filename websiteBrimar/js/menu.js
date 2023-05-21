const menu = document.querySelector('.menu');
const menuNave = document.querySelector('.menuNavegacion');

// console.log(menuNave);
// console.log(menu);

menu.addEventListener('click', () => {
    menuNave.classList.toggle("spread")
})

window.addEventListener('click', e => {
    if (menuNave.classList.contains('spread') && e.target != menuNave && e.target != menu) {
        menuNave.classList.toggle("spread")
    }
})
