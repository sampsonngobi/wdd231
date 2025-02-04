import { updateFooter, currentYear, lastModifiedDate } from "./footer.js";
import { hamBurgerButton, navigation, toggleMenu } from './hamBurgerButton.js';



// Get the URL
const currentUrl = window.location.href;

// Split the URL at '?'
const everything = currentUrl.split('?');

// Check if there's a query string
let formData = everything[1] ? everything[1].split('&') : [];

const showInfo = document.querySelector("#result");

// Create URLSearchParams object to handle URL decoding
    let urlParams = new URLSearchParams(window.location.search);
    let firstName = decodeURIComponent(urlParams.get("first-name") || "").replace(/\+/g, ' ');
    let orgTitle = decodeURIComponent(urlParams.get("orgTitle") || "").replace(/\+/g, ' ');

function show(cup) {
    let result = ""; // Declare result variable
    formData.forEach(element => {
        if (element.startsWith(cup + "=")) { // Ensure it matches the full key
            result = element.split('=')[1].replace('%40', "@").replace(/\+/g, ' ').replace(/\%3A/g , ':').replace(/\%28/g, '').replace(/\%29/g, ' '); // Extract and clean the value
        }
    });
    
    console.log(`User Info: ${cup} = ${result || "Not found"}`); 

    return result || "Not found"; // Return "Not found" if key isn't in URL
}

showInfo.innerHTML = `
<h4>PERSONAL INFORMATION</h4>
<p>NAME: ${show("last-name")}, ${firstName} </p>
<p>ORGANIZATIONAL TITLE: ${orgTitle} </p>

<h4>CONTACT INFORMATION</h4>
<p>EMAIL: ${show("email")} </p>
<p>PHONE: ${show("phone").replace('%2B', ' +')} </p>

<h4>ORGANIZATIONAL INFORMATION</h4>
<p>BUSINESS NAME: ${show("org-name")} </p> <br>
\n<p>Submission Time: ${show("time-stamp")} </p>

`;


updateFooter();
toggleMenu();
