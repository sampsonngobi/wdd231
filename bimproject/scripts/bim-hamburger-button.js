
// // hamBurgerButton integration


// export function toggleMenu() {
//     hamBurgerButton = document.querySelector('#menu');
//     navigation = document.querySelector('.list');

//     navigation.classList.toggle("open");
//     hamBurgerButton.classList.toggle("open");
//     console.log("hello")
// }

// hamBurgerButton.addEventListener('click', toggleMenu);

export function toggleMenu() { 
    const hamBurgerButton = document.querySelector("#menu");
    const navigation = document.querySelector(".list");

    if (hamBurgerButton && navigation) { 
        navigation.classList.toggle("open"); 
        hamBurgerButton.classList.toggle("open"); 
    } else {
        console.error("Menu button or navigation list not found!");
    }
}

// Attach event listener only when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const hamBurgerButton = document.querySelector("#menu");

    if (hamBurgerButton) {
        hamBurgerButton.addEventListener("click", toggleMenu);
    }
});
