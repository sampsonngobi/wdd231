import { currentYear, updateFooter } from "./footer.js";
import { hamBurgerButton, navigation, toggleMenu } from './hamBurgerButton.js';
// import { generateSubmitTime } from "./time.js";

const btnGold = document.querySelector("#gold-info")
const btnSilver = document.querySelector("#silver-info")
const btnBronze = document.querySelector("#bronze-info")
const btnNp = document.querySelector("#np-info")

const closeBtn = document.querySelector("#close-dialog")
const dialogBox = document.querySelector("#dialog")
const dailogContent = document.querySelector("#dialog-text")
const dialogTitle = document.querySelector("#dialog h2")

closeBtn.addEventListener('click', () => {
    dialogBox.close();
});


btnGold.addEventListener('click', () =>{
    dialogBox.showModal();
    dialogTitle.innerHTML = `GOLD MEMBERSHIP`
    dailogContent.innerHTML = `
    <p>Gold membership is the highest tier of membership.</p>
     <P>It offers the most benefits and perks</p>
     <p>- free English classes for staff</p>
     <p>- Invitations to VIP networking events with top business leaders</p>
     <p>- Access to closed business forums and mastermind groups</p>
     <p>- Featured placement in the chamber’s website directory</p>
     <p>- Includes all benefits in other levels</p>
     <h4>Cost: $R 2000</h4>
    `
})
btnSilver.addEventListener('click', () =>{
    dialogBox.showModal();
    dialogTitle.innerHTML = `SILVER MEMBERSHIP`
    dailogContent.innerHTML = `
    <p>Silver membership has the following benefits.</p>
     <P>- Access to regular networking events and business mixers</p>
     <p>- Special pricing on chamber events, advertising, and sponsorships</p>
     <p>- Representation in local business policy discussions</p>
     <p>- Exclusive member-to-member discount programs</p>
     <p>- Access to expert-led webinars and industry insights</p>
     <p>- Includes all benefits in Bronze and NP levels</p>
     <h4>Cost: $R 1500</h4>
    `
})
btnBronze.addEventListener('click', () =>{
    dialogBox.showModal();
    dialogTitle.innerHTML = `BRONZE MEMBERSHIP`
    dailogContent.innerHTML = `
    <p>Bronze membership has the following benefits.</p>
    <p>- Invitation to selected networking events</p>
    <p>- Standard business directory listing</p>
    <p>- Discounts on selected chamber services</p>
    <p>- Access to chamber newsletters and updates</p>
    <p>- Includes all benefits in NP level</p>
    <h4>Cost: $R 1000</h4>
    `
})
btnNp.addEventListener('click', () =>{
    dialogBox.showModal();
    dialogTitle.innerHTML = `MP MEMBERSHIP`
    dailogContent.innerHTML = `
    <p>NP membership has the following benefits.</p>
    <p>- Access to general chamber announcements and updates</p>
    <p>- Inclusion in chamber email communications</p>
    <p>- Eligibility to attend selected public events</p>
    <p>- Basic listing on the chamber website</p>
    <p>- Opportunity to upgrade to higher membership levels</p>
    <h4>Cost: $R 100</h4>
    `
})




updateFooter()
toggleMenu();
// generateSubmitTime(Event)
