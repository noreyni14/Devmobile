document.addEventListener('deviceready',rechercherContacts);
function rechercherContacts() {
    const options = new ContactFindOptions();
    options.filter='resp'; // à enlever de vos codes
    options.multiple=true;
    options.hasPhoneNumber='true';
    let fields= ['name'];

    navigator.contacts.find(fields,afficherContacts,gererErreur,options);
}
function afficherContacts(contacts) {
    let code = '';
    for (let i = 0; i < contacts.length; i++) {
     code += `
     <li>
         <a href="#">
         <img src="${contacts[i].photos ? contacts[i].photos[0].value : "img/avatar1.jpg"}">
         <h1>${contacts[i].displayName}</h1> 
         <p>${contacts[i].PhoneNumbers[0].value}</p> 
         </a>
     </li>  
     `;
    }
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = code;
    $(contactList).listview('refresh');
 }
 
function gererErreur(error) {
    console.log("Erreur :");
    console.log(error);
}