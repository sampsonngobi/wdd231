// hamBurgerButton integration
const hamBurgerButton = document.querySelector('#menu')
const navigation = document.querySelector('.list')

hamBurgerButton.addEventListener('click', () =>{
    navigation.classList.toggle("open");
    hamBurgerButton.classList.toggle("open");
});
