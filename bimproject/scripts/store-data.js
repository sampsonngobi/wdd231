const path = './data/stores.json';
const cards = document.querySelector("#stores");

export async function getStores() {
    const response = await fetch(path);
    const data = await response.json();
    displayStores(data.stores);
    console.log(data.stores);
}

const displayStores = (stores) => {
    stores.forEach(store => {

        // Store Card Elements
        const storeCard = document.createElement('div');
        const logo = document.createElement('img');
        const title = document.createElement('h3');
        const type = document.createElement('p');
        const openDialog = document.createElement('button');

        // Set Store Card Content
        title.innerText = store.title;
        type.innerText = `Service type: ${store.type}`;
        openDialog.innerText = 'More Info';

        logo.setAttribute('src', store.image);
        logo.setAttribute('alt', 'Store Logo');
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');
        
        // Modal Elements
        const modal = document.createElement('dialog');
        // const modalContent = document.createElement('div');
        const modalLogo = document.createElement('img');
        const modalTitle = document.createElement('h2');
        const modalText = document.createElement('p');
        const phone = document.createElement('p');
        const email = document.createElement('p');
        const storeNumber = document.createElement('p');
        const closeDialog = document.createElement('button');


        // Set Modal Content
        modalLogo.setAttribute('src', store.image);
        modalLogo.setAttribute('alt', 'Store Logo');
        modalLogo.setAttribute('width', '150');
        modalLogo.setAttribute('height', '150');

        modalTitle.innerText = store.title;
        modalText.innerText = `Service Type: ${store.type}`;
        phone.innerText = `Phone: ${store.contact.phone}`
        email.innerText = `Phone: ${store.contact.email}`
        storeNumber.innerText = `Phone: ${store.storeNumber}`
        closeDialog.innerText = 'Close';

        // Append Elements to Modal
        modal.append(modalLogo, modalTitle, modalText, closeDialog, phone, email, storeNumber);
       

        // Append Elements to Store Card
        storeCard.append(logo, title, type, openDialog, modal);

        // Append Store Card to Main Container
        cards.append(storeCard);

        // Event Listeners
        openDialog.addEventListener('click', () => {
            modal.showModal();
        });

        closeDialog.addEventListener('click', () => {
            modal.close();
        });
    });
}

getStores();
