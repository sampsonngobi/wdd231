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

    })
}


getStores()