// // hamBurgerButton integration
// const hamBurgerButton = document.querySelector('#menu')
// const navigation = document.querySelector('.list')

//  hamBurgerButton.addEventListener('click', () =>{
//     navigation.classList.toggle("open");
//     hamBurgerButton.classList.toggle("open");
// });

// hamBurgerButton integration
export const hamBurgerButton = document.querySelector('#menu');
export const navigation = document.querySelector('.list');

export function toggleMenu() {
    navigation.classList.toggle("open");
    hamBurgerButton.classList.toggle("open");
}

hamBurgerButton.addEventListener('click', toggleMenu);
