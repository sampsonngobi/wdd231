const path = './data/ad.json';

const cards = document.querySelector("#advert")
console.log(cards)

export async function getAdvert(){
    const response = await fetch(path)
    const data = await response.json()
    displayAdvert(data.ads)
    console.log(data.ads)
}

const displayAdvert = (ads) =>{
    const randomAd = ads.sort(() => Math.random() -0.5)[0];

    cards.innerHTML = "";

   

        // create add elements
        const title = document.createElement('h2');
        const image = document.createElement('img');
        const description = document.createElement('p');
        const link = document.createElement('p');

        // assign contents 
        title.textContent = randomAd.title;
        description.textContent = randomAd.description
        link.innerHTML = `<a href="${randomAd.link}" target="_blank" class="site">Website</a>`

        image.setAttribute('src', randomAd.image);
        image.setAttribute('alt', randomAd.title);
        image.setAttribute('width', '100');
        image.setAttribute('height', '100');
        image.setAttribute('loading', 'lazy');

        cards.append(title, image, description, link);

        

}


getAdvert();