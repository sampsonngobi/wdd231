import {toggleMenu} from './bim-hamburger-button.js'
import {updateFooter} from './footer.js'
import { apiFetch } from './weather.js'

const currenturl = window.location.href;

// console.log(currenturl)
const everyThing = currenturl.split('?')


// console.log(everyThing)

const formData = everyThing[1].split('&')

// console.log(formData)

const showInfo = document.querySelector('#comp-info')

function show(info){
    let result ="";

    formData.forEach(element =>{
        if(element.startsWith(info + "=")){
            result = element.split('=')[1].replace('%40','@').replace(/\+/g, ' ')
        }
    })

    return result || "Not found"
}

showInfo.innerHTML = `
<h4>PERSONAL INFORMATION</h4>
<p>NAME: ${show("full-name")}</p>
<p>Org. Title: ${show("org-title")}</p>
<p>Date of Birth: ${show("date-of-birth")}</p>
<p>CPF: ${show("cpf")}</p>

<h4>ORGANIZATION INFORMATION</h4>
<p>Org. Name: ${show("org-name")}</p>
<p>CPNJ: ${show("cpnj")}</p>
<p>Service Type: ${show("Service")}</p>
<p>Preffered Store lane: ${show("store-lane")}</p>

<h4>CONTACT INFORMATION</h4>
<p>Org. PHONE: ${show("phone")}</p>
<p>EMAIL: ${show("email")}</p>

`

toggleMenu()
updateFooter()
apiFetch()

