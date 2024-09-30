
import { shoes } from "./shoesArray.js";

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = shoes.find(shoe => shoe.id == productId);
    if (product) {
        document.querySelector('.product-name').innerText = product.model;
        document.querySelector('.product-brand').innerText = product.brand;
        document.querySelector('.current-price').innerText = "Ksh  " + product.price;
        document.querySelector('img').src = product.image;
    } else {

        console.error('Product not found');
    }
});