import { currentYear, updateFooter } from "./footer.js";
import { hamBurgerButton, navigation, toggleMenu } from './hamBurgerButton.js';
import{places} from '../scripts/places.mjs'

console.log(places)

const cards = document.querySelector("#places-card")

const displayPlaces = (places) =>{
    places.forEach((place) => {
        const card = document.createElement("div");
        const title = document.createElement("h2");
        const portriat = document.createElement("figure");
        const address = document.createElement("address");
        const description = document.createElement("p");
        const button = document.createElement("button");

        const image = document.createElement("img");
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = place.name;


       
        image.src =`images/${place.image}`;
        console.log(`../images/${place.image}`)
        image.setAttribute('alt', place.name);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', '200');

        portriat.appendChild(image)
        portriat.appendChild(figcaption);

        console.log(place.image)

        title.textContent = `${place.name}`
        address.textContent = `${place.address}`
        description.textContent = `${place.description}`
        button.innerText = "Learn More"

    
       
       

        card.append(title)
        card.append(portriat)
        card.append(address)
        card.append(description)
        card.append(button)
       

        cards.append(card)
       
    })
    }

    const visitMessage = document.getElementById("visit-message");

// Get the last visit time from localStorage
const lastVisit = localStorage.getItem("lastVisit");

const currentTime = Date.now();

if (!lastVisit) {
    // First visit message
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate the time difference in days
    const lastVisitTime = Number(lastVisit);
    const timeDifference = currentTime - lastVisitTime;
    const daysBetweenVisits = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysBetweenVisits < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        const dayText = daysBetweenVisits === 1 ? "day" : "days";
        visitMessage.textContent = `You last visited ${daysBetweenVisits} ${dayText} ago.`;
    }
}

// Store the current time as the new last visit time
localStorage.setItem("lastVisit", currentTime);



// getPlaces()
updateFooter();
toggleMenu();
displayPlaces(places)
// generateSubmitTime(event)
