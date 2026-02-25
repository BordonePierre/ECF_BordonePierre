let user = {
    nom: "Bordone",
    prenom: "Pierre",
    email: "bordonepierre2004@gmail.com",
    tel: "0781487870",
    adresse: "2 rue Jean Paul Thorez Seclin"
}

const account = document.getElementById('account');
account.innerHTML = `
    <div class="flex flex-row justify-between">
        <p>Nom : ${user.nom}</p>
        <p>Prènom : ${user.prenom}</p>
    </div>
    <p>Adresse mail : ${user.email}</p>
    <p>Numéro de téléphone : ${user.tel}</p>
    <p>Adresse postale : ${user.adresse}</p>
`