const path = './data/stores.json' 
const cards = document.querySelector("#stores")

export async function getStores() {
    const response = await fetch(path);
    const data = await response.json();
    displayStores(data.stores)
    console.log(data.stores)
}

const displayStores = (stores) =>{
    
    stores.forEach(store => {
        const storeCard = document.createElement('div');
        const logo = document.createElement('img')
        const title = document.createElement('h3');
        const type = document.createElement('p');
        const button = document.createElement('button')
        

        title.innerHTML = store.title
        type.innerHTML = `Sevice type: ${store.type}`

        logo.setAttribute('src', store.image)
        logo.setAttribute('alt', 'store logo')
        logo.setAttribute('loading', 'lazy')
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        button.innerText = 'More Info'

        button.addEventListener('click', () => {
            displayModel(store)
        })

      
        storeCard.append(logo, title , type, button)

        cards.append(storeCard)
    })
}

function displayModel(store){
    const modal = document.querySelector("#myModal")
    modal.style.display = "block"
    modal.innerHTML = document.createElement('span').innerText = store.contact.phone 

}



getStores()