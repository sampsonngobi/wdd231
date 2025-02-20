const currentYear = new Date().getFullYear();
const lastModifiedElement = document.lastModified;

export function updateFooter(){
    const year = document.querySelector("#year");
    const lastModified = document.querySelector("#lastModified");

    if (year){
        year.textContent = currentYear;
    }

    if(lastModified){
        lastModified.innerHTML = lastModifiedElement;
    }
}

