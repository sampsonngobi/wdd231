// hamBurgerButton integration
const hamBurgerButton = document.querySelector('#menu')
const navigation = document.querySelector('.list')

hamBurgerButton.addEventListener('click', () =>{
    navigation.classList.toggle("open");
    hamBurgerButton.classList.toggle("open");
});


// footer update

function updatefooter(){
    const currentYear = new Date().getFullYear();

    const year = document.querySelector('#year')
    const lastModified = document.querySelector('#modified-date')

    year.innerHTML = currentYear;
    lastModified.innerHTML = document.lastModified;
}

updatefooter()