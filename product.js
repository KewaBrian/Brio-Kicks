import { shoes } from "./shoesArray.js";

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const shoeList = document.querySelector('.product-list');

    const displayShoes = (filteredShoes) => {
        shoeList.innerHTML = '';
        filteredShoes.forEach(shoe => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img class="product-image" src="${shoe.image}" alt="${shoe.model}" />
                <a href="shoe.html?id=${shoe.id}" class="product-details">
                    <h2 class="product-name">${shoe.model}</h2>
                    <p class="product-description">${shoe.brand}</p>
                    <p class="current-price">Ksh ${shoe.price}</p>
                </a>
            `;
            shoeList.appendChild(card);
        });
    };

    displayShoes(shoes);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const brand = button.classList[0];
            const filteredShoes = brand ? shoes.filter(shoe => shoe.brand.includes(brand)) : shoes;
            displayShoes(filteredShoes);
        });
    });
});
