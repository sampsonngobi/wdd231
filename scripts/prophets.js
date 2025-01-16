const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.prophets);    
    displayProphet(data.prophets);
}

const displayProphet = (prophets) =>{
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const birthDate = document.createElement("p");
        const birthPlace = document.createElement("p")
        const potrait = document.createElement("img");

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        birthDate.innerHTML = `Date of birth: ${prophet.birthdate}`;
        birthPlace.innerHTML = `Place of birth: ${prophets.birthplace}`;

        potrait.setAttribute('src', prophet.imageurl)
        potrait.setAttribute('alt', prophet.name);
        potrait.setAttribute('loading', 'lazy');
        potrait.setAttribute('width', '340');
        potrait.setAttribute('height', '440');

        card.append(fullName);
        card.append(birthDate);
        card.append(birthPlace);
        card.append(potrait);
        

        cards.append(card)
        
    })
}
getProphetData()