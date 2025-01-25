
function updatefooter(){
    const currentYear = new Date().getFullYear();

    const year = document.querySelector('#year')
    const lastModified = document.querySelector('#modified-date')

    year.innerHTML = currentYear;
    lastModified.innerHTML = document.lastModified;
}
updatefooter();
