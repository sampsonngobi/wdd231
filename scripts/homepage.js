const hamBurgerButton = document.querySelector("#menu");
const navigation = document.querySelector(".list");

if(hamBurgerButton && navigation){
    hamBurgerButton.addEventListener('click', ()=>{
        navigation.classList.toggle("open");
        hamBurgerButton.classList.toggle("open");
    });
}


function footerUpdate(){
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified);

    document.querySelector("#year").innerHTML = currentYear;
    document.querySelector("#modified-date").innerHTML = lastModified.toLocaleDateString();

   


}

footerUpdate();