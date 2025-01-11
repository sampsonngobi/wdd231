const hamBurgerButton = document.querySelector("#menu");
const navigation = document.querySelector(".list");

if (hamBurgerButton && navigation) {
    console.log("Hamburger button:", hamBurgerButton);
    console.log("Navigation list:", navigation);

    hamBurgerButton.addEventListener('click', () => {
        navigation.classList.toggle("open");
        hamBurgerButton.classList.toggle("open");
    });
} else {
    console.error("Elements not found");
}


function footerUpdate(){
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified);

    document.querySelector("#year").innerHTML = currentYear;
    document.querySelector("#modified-date").innerHTML = lastModified.toLocaleDateString();

   


}

footerUpdate();