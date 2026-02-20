let products = {
    product: [],

    ajouterProduit(nom, prix, image, disponible, quantite, nomhtml){
        this.product.push({nom: nom, prix: prix, image: image, disponible: disponible, quantite: quantite, nomhtml: nomhtml});
    }
}

products.ajouterProduit("PC Gamer 1", 1739.90, "assets/image/ImageProduitPcGaming1.png", true, 10, "pcgamer1");
products.ajouterProduit("PC Gamer 2", 1989.90, "assets/image/ImageProduitPcGaming2.png", false, 0, "pcgamer2");
products.ajouterProduit("PC Travail 1", 799.90, "assets/image/ImageProduitPcTravail1.png", true, 10, "pctravail1");
products.ajouterProduit("PC Travail 2", 999.99, "assets/image/ChatGPT Image Feb 20, 2026, 09_13_28 AM.png", true, 10, "pctravail2");
products.ajouterProduit("Carte graphique 1", 399.99, "assets/image/ImageProduitCarteGraphique1.png", true, 10, "cartegraphique1");
products.ajouterProduit("Carte graphique 2", 699.99, "assets/image/ImageProduitCarteGraphique2.png", true, 10, "cartegraphique2");
products.ajouterProduit("Ecran 1", 299.99, "assets/image/ImageProduitEcran1.png", false, 0, "ecran1");
products.ajouterProduit("Ecran 2", 499.99, "assets/image/ImageProduitEcran2.png", true, 10, "ecran2");


// fonction pour afficher les produits dans le HTML
function afficherProduits(produitsTrouves) {
    const resultsContainer = document.getElementById("products");
    resultsContainer.innerHTML = ""; // on vide avant d'afficher

    if(produitsTrouves.length === 0){
        resultsContainer.innerHTML = "<p class='text-center'>Aucun produit disponible.</p>";
        return;
    }

    produitsTrouves.forEach(product => {
        let dispo = "";
        let couleur = "";

        // afficher la disponibilité
        if(product.disponible && product.quantite > 0){
            dispo = "disponible";
            couleur = "text-green-600";
        }else{
            dispo = "indisponible";
            couleur = "text-red-400";
        }

        const productCard = document.createElement("div");
        productCard.className = "flex flex-col transition-all duration-200 hover:scale-102";

        productCard.innerHTML = `
            <a href="${product.nomhtml + ".html"}"><img class="w-127 border-2 border-black" src="${product.image}" alt="${product.nom}">
            <div class="bg-main border-2 border-black text-white text-[24px] flex flex-col items-center">
                <h3>${product.nom}</h3>
                <p>Prix : ${product.prix}€</p>
                <p class="${couleur}">${dispo}</p>
            </div></a>
        `;
        resultsContainer.appendChild(productCard);
    });
}

afficherProduits(products.product);

// show or hide filter menu
function filterShow() {
    const menu = document.getElementById('filter');

    menu.classList.toggle('hidden'); // add or remove hidden
    menu.classList.toggle('flex');   // add or remove flex
}

// Price
function updatePriceComputer(value) {
    document.getElementById("minPriceComputer").textContent = value + "€";
}

function updatePriceMobile(value) {
    document.getElementById("minPriceMobile").textContent = value + "€";
}