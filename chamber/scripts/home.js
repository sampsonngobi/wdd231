import { currentYear, updateFooter } from "./footer.js";
import { hamBurgerButton, navigation, toggleMenu } from './hamBurgerButton.js';
import { apiFetch } from "./weather.js";

// add data

const path = './data/members.json';

const cards = document.querySelector("#cards")

async function getMembers() {
    const response = await fetch(path)
    const data = await response.json()
    displayMember(data.members)
}

const displayMember = (members) =>{

     // Filter members with gold or silver membership
     const filteredMembers = members.filter(
        (member) => member.membershipLevel.toLowerCase() === "gold" || member.membershipLevel.toLowerCase() === "silver"
    );

    // Shuffle the filtered members
    const shuffledMembers = filteredMembers.sort(() => Math.random() - 0.5);

     // Restrict to the first 3 members
    const limitedMembers = shuffledMembers.slice(0, 3);

    limitedMembers.forEach((member) =>{
        const card = document.createElement('section');
        const name = document.createElement('h2');
        const address = document.createElement('p');
        const phone = document.createElement('p')
        const website = document.createElement('p');
        const email = document.createElement('p');
        const membershipLevel = document.createElement('p');
        const logo = document.createElement('img');


        name.innerHTML = `${member.name}`;
        address.innerHTML = `${member.address}`;
        phone.innerHTML = `${member.phoneNumber}`
        website.innerHTML = `<a href="${member.website}" target="_blank" class="site">Website</a>`;
        email.innerHTML = `${member.email}`;
        membershipLevel.innerHTML = `${member.membershipLevel}`;

        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', member.name);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        card.append(name);
        card.append(address);
        card.append(phone);
        card.append(website);
        card.append(email);
        card.append(membershipLevel);
        card.append(logo);

        cards.append(card);

    })
}


getMembers();
updateFooter();
toggleMenu();
apiFetch()