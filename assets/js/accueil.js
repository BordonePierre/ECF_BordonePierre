function menuBurger() {
    const menu = document.getElementById('burger');
    const image = document.getElementById('img');

    menu.classList.toggle('hidden'); // add or remove hidden
    menu.classList.toggle('flex');   // add or remove flex
    image.classList.toggle('pt-25');
}