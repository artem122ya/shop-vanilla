import { setNavbarCartStatus } from "./Navbar";

export class Cart {

    constructor(productStore) {
        this.productStore = productStore;
    }

    addToCart(id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart = cart || {};
        cart[id] = {amount: cart[id]? ++cart[id].amount : 1};

        localStorage.setItem("cart", JSON.stringify(cart));
        this.displayCartLink();
    }

    displayCartLink() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        let totalAmount = 0;
        let totalPrice = 0;

        for (let key in cart) {
            totalAmount += cart[key].amount;
            totalPrice += this.productStore.products[Number(key) - 1].price * cart[key].amount;
        }
        
        setNavbarCartStatus(totalAmount, Math.ceil(totalPrice));
    }
}