import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { renderCards, createNewElement } from "./renderFunctions";
import Product from "./Product";
import { addNavbar, setNavbarCartStatus } from "./Navbar";
import { ProductStore } from "./ProductStore";
import { Cart } from "./Cart";

const headerElement = createNewElement("header");
const mainElement = createNewElement("main");

addNavbar(headerElement);

const productStore = new ProductStore();
const cart = new Cart(productStore);
axios.get("https://artem122ya.github.io/shop-vanilla/src/data.json")
    .then(res => {
        productStore.setProductList(res.data.map(el => new Product(el.id, el.name, el.description, el.amount, el.price, null, cart.addToCart.bind(cart))));
        renderCards(productStore.getProductList(), mainElement);
        cart.displayCartLink();
    });

document.getElementById("app").appendChild(headerElement);
document.getElementById("app").appendChild(mainElement);

