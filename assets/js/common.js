// show or hide burger menu
function menuBurger() {
    const menu = document.getElementById('burger');
    const image = document.getElementById('img');

    menu.classList.toggle('hidden'); // add or remove hidden
    menu.classList.toggle('flex');   // add or remove flex
    image.classList.toggle('pt-25');
}

// show or hide togglemenu
function toggleMenu(id) {
    const menu = document.getElementById(id);
    menu.classList.toggle('hidden');
}

const header = document.getElementById('header');
header.innerHTML=`
<!-- navbar -->
        <nav class="bg-main flex flex-row items-center justify-between fixed w-full z-50 h-25 pr-15 border-2 border-main border-b-black">

            <!-- logo -->
            <a href="index.html"><img class="w-40 h-25 md:w-80 md:h-50" src="assets/image/Logo.png" alt="Logo"></a>

            <!-- research -->
            <div class="flex-1 flex justify-center px-4">
                <div class="flex w-full max-w-xl">
                    
                    <input 
                        type="text"
                        id="searchInput"
                        placeholder="Rechercher un produit..."
                        class="w-full px-4 py-2 rounded-l-2xl border border-gray-300 
                            focus:outline-none focus:ring-2 focus:ring-black bg-white"
                    />

                    <button id="searchBtn" class="px-5 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-r-2xl">🔍</button>

                </div>
            </div>


            <!-- icones profile/cart -->
            <section class="hidden md:flex flex-row gap-10">
                <a href = "account.html"><img class="w-10 h-10 duration-200 hover:scale-120" src="assets/image/logoUSer.png" alt="userLogo"></a>
                <a href = "cart.html"><img class="w-10 h-10 duration-200 hover:scale-120" src="assets/image/logoCart.png" alt="cartLogo"></a>
            </section>

            <!-- menu burger -->
            <section class = "flex flex-row gap-2 md:hidden items-center">
                <button onclick="menuBurger()" class="flex flex-col gap-1 ml-2">
                    <span class="block w-5 h-[0.15rem] bg-back"></span>
                    <span class="block w-5 h-[0.15rem] bg-back"></span>
                    <span class="block w-5 h-[0.15rem] bg-back"></span>
                </button>
                <a href = "account.html"><img class="w-7 h-7" src="assets/image/logoUSer.png" alt="userLogo"></a>
                <a href = "cart.html"><img class="w-7 h-7" src="assets/image/logoCart.png" alt="cartLogo"></a>
            </section>

        </nav>

        <!-- categories mobile -->
            <section class="hidden md:hidden bg-main md:flex flex-col relative gap-10 text-white items-center pt-30 pb-5 border-2 border-main border-b-black" id="burger">

                <div class="group flex flex-col relative w-40">
                    <button onclick="toggleMenu('menu-ordi')" class="w-full text-left px-4 py-2 bg-main hover:bg-back hover:text-main transition-colors">
                        <span>Ordinateurs</span>
                    </button>
                    <ul id="menu-ordi" class="hidden group-hover:block absolute top-full left-0 w-40 bg-main py-1 shadow-lg z-50">
                        <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Portables</li>
                        <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Gaming</li>
                        <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Fixes</li>
                    </ul>
                </div>

                <div class="group flex flex-col relative w-40">
                <button onclick="toggleMenu('menu-pieces')" class="w-full text-left px-4 py-2 bg-main hover:bg-back hover:text-main transition-colors">
                    <span>Pièces</span>
                </button>
                <ul id="menu-pieces" class="hidden group-hover:block absolute top-full left-0 w-40 bg-main py-1 shadow-lg z-50">
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Cartes graphiques</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Ventilateurs</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Cartes mères</li>
                </ul>
            </div>

            <div class="group flex flex-col relative w-40">
                <button onclick="toggleMenu('menu-periph')" class="w-full text-left px-4 py-2 bg-main hover:bg-back hover:text-main transition-colors">
                    <span>Périphériques</span>
                </button>
                <ul id="menu-periph" class="hidden group-hover:block absolute top-full left-0 w-40 bg-main py-1 shadow-lg z-50">
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Ecrans</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Souris</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Claviers</li>
                </ul>
            </div>

            <div class="group flex flex-col relative w-40">
                <button onclick="toggleMenu('menu-res')" class="w-full text-left px-4 py-2 bg-main hover:bg-back hover:text-main transition-colors">
                    <span>Réseaux</span>
                </button>
                <ul id="menu-res" class="hidden group-hover:block absolute top-full left-0 w-40 bg-main py-1 shadow-lg z-50">
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Câbles réseaux</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Cartes réseaux</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Routeurs et modems</li>
                </ul>
            </div>

            <div class="group flex flex-col relative w-40">
                <button onclick="toggleMenu('menu-tab')" class="w-full text-left px-4 py-2 bg-main hover:bg-back hover:text-main transition-colors">
                    <span>Tablettes</span>
                </button>
                <ul id="menu-tab" class="hidden group-hover:block absolute top-full left-0 w-40 bg-main py-1 shadow-lg z-50">
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Samsung</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Apple</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Protections</li>
                </ul>
            </div>

            </section>
        
        <!-- categories computer -->
        <section class="bg-main hidden md:flex flex-row text-white text-[20px] items-center justify-between pt-30 pb-5 w-full px-10">

            <div class="group flex flex-col relative w-40">
                <button class="w-full text-left px-4 py-2 bg-main hover:bg-back hover:text-main transition-colors">
                    <span>Ordinateurs</span>
                </button>
                <ul class="hidden group-hover:block absolute top-full left-0 w-40 bg-main py-1 shadow-lg z-50">
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Portables</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Gaming</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Fixes</li>
                </ul>
            </div>

            <div class="group flex flex-col relative w-40">
                <button class="w-full text-left px-4 py-2 bg-main hover:bg-back hover:text-main transition-colors">
                    <span>Pièces</span>
                </button>
                <ul class="hidden group-hover:block absolute top-full left-0 w-40 bg-main py-1 shadow-lg z-50">
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Cartes graphiques</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Ventilateurs</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Cartes mères</li>
                </ul>
            </div>

            <div class="group flex flex-col relative w-40">
                <button class="w-full text-left px-4 py-2 bg-main hover:bg-back hover:text-main transition-colors">
                    <span>Périphériques</span>
                </button>
                <ul class="hidden group-hover:block absolute top-full left-0 w-40 bg-main py-1 shadow-lg z-50">
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Ecrans</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Souris</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Claviers</li>
                </ul>
            </div>

            <div class="group flex flex-col relative w-40">
                <button class="w-full text-left px-4 py-2 bg-main hover:bg-back hover:text-main transition-colors">
                    <span>Réseaux</span>
                </button>
                <ul class="hidden group-hover:block absolute top-full left-0 w-40 bg-main py-1 shadow-lg z-50">
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Câbles réseaux</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Cartes réseaux</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Routeurs et modems</li>
                </ul>
            </div>

            <div class="group flex flex-col relative w-40">
                <button class="w-full text-left px-4 py-2 bg-main hover:bg-back hover:text-main transition-colors">
                    <span>Tablettes</span>
                </button>
                <ul class="hidden group-hover:block absolute top-full left-0 w-40 bg-main py-1 shadow-lg z-50">
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Samsung</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Apple</li>
                    <li class="px-4 py-2 hover:bg-back hover:text-main cursor-pointer">Protections</li>
                </ul>
            </div>

        </section>
`

const footer = document.getElementById('footer');
footer.innerHTML=`
<section class="flex flex-col gap-5">
            <p class="text-[20px]">TechShop</p>
            <div class="flex flex-col gap-3">
                <a href = "contact.html"><p>Contactez nous</p></a>
                <a href="legal.html"><p>Mentions légales/CGU</p></a>
                <p>Politique de confidentialité</p>
                <p>Nos réseaux :</p>
                <div class="flex flex-row gap-2">
                    <img class="invert w-10" src="assets/image/x-logo.svg" alt="xLogo">
                    <img class="w-4" src="assets/image/facebook.svg" alt="FacebookLogo">
                    <img src="assets/image/youtube.svg" alt="YoutubeLogo">
                    <img class="invert w-10" src="assets/image/mail.svg" alt="mailLogo">
                </div>
            </div>
        </section>

        <section class="flex flex-col gap-5">
            <p class="text-[20px]">Catégories populaires</p>
            <div class="flex flex-col gap-3">
                <p>Composants</p>
                <p>Ordinateurs</p>
                <p>Stockage interne</p>
                <p>Périphérique</p>
            </div>
        </section>
`

// create and add products
let productsSearch = {
    product: [],

    ajouterProduit(nom, prix, image, disponible, quantite, nomhtml){
        this.product.push({nom: nom, prix: prix, image: image, disponible: disponible, quantite: quantite, nomhtml: nomhtml});
    }
}

productsSearch.ajouterProduit("PC Gamer 1", 1739.90, "assets/image/ImageProduitPcGaming1.png", true, 10, "pcgamer1");
productsSearch.ajouterProduit("PC Gamer 2", 1989.90, "assets/image/ImageProduitPcGaming2.png", false, 0, "pcgamer2");
productsSearch.ajouterProduit("PC Gamer 3", 1989.90, "assets/image/ImageProduitPcGaming1.png", true, 10, "pcgamer3");
productsSearch.ajouterProduit("PC Travail 1", 799.90, "assets/image/ImageProduitPcTravail1.png", true, 10, "pctravail1");
productsSearch.ajouterProduit("PC Travail 2", 999.99, "assets/image/ChatGPT Image Feb 20, 2026, 09_13_28 AM.png", true, 10, "pctravail2");
productsSearch.ajouterProduit("PC Travail 3", 1239.90, "assets/image/ImageProduitPcTravail1.png", true, 10, "pctravail3");
productsSearch.ajouterProduit("Carte graphique 1", 399.99, "assets/image/ImageProduitCarteGraphique1.png", true, 10, "cartegraphique1");
productsSearch.ajouterProduit("Carte graphique 2", 699.99, "assets/image/ImageProduitCarteGraphique2.png", true, 10, "cartegraphique2");
productsSearch.ajouterProduit("Carte graphique 3", 829.90, "assets/image/ImageProduitCarteGraphique1.png", false, 0, "cartegraphique3");
productsSearch.ajouterProduit("Ecran 1", 299.99, "assets/image/ImageProduitEcran1.png", false, 0, "ecran1");
productsSearch.ajouterProduit("Ecran 2", 499.99, "assets/image/ImageProduitEcran2.png", true, 10, "ecran2");
productsSearch.ajouterProduit("Ecran 3", 599.99, "assets/image/ImageProduitEcran1.png", false, 0, "ecran3");

// show products HTML
function afficherProduits(produitsTrouves) {
    const results = document.getElementById('textResults');
    results.classList.remove('hidden');
    const line = document.getElementById('line');
    line.classList.remove('hidden');
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML=``;

    if(produitsTrouves.length === 0){
        resultsContainer.innerHTML = "<p class='text-center'>Aucun produit trouvé après votre recherche.</p>";
        return;
    }

    produitsTrouves.forEach(product => {
        let dispo = "";
        let couleur = "";

        // show availability
        if(product.disponible && product.quantite > 0){
            dispo = "disponible";
            couleur = "text-green-600";
        }else{
            dispo = "indisponible";
            couleur = "text-red-400";
        }

        const productCard = document.createElement("div");
        productCard.className = "transition-all duration-200 hover:scale-102"
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

// listening button
document.getElementById("searchBtn").addEventListener("click", () => {
    const searchValue = document.getElementById("searchInput").value.toLowerCase().trim();
    const produitsTrouves = productsSearch.product.filter(p => p.nom.toLowerCase().includes(searchValue));
    afficherProduits(produitsTrouves);

    // scroll to results
    document.getElementById("results").scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// search on "enter"
document.getElementById("searchInput").addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        document.getElementById("searchBtn").click();
    }
});