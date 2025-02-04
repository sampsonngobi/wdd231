// Export the values so they can be used elsewhere
export const currentYear = new Date().getFullYear();
export const lastModifiedDate = document.lastModified;

export function updateFooter() {
    const yearElement = document.querySelector("#year");
    const lastModifiedElement = document.querySelector("#modified-date");

    if (yearElement) {
        yearElement.innerHTML = currentYear;
    }

    if (lastModifiedElement) {
        lastModifiedElement.innerHTML = lastModifiedDate;
    }
}

// Call the function to update the footer
updateFooter();
