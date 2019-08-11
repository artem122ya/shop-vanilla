import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { renderCards, createNewElement } from "./renderFunctions";
import Product from "./Product";
import { addNavbar, setNavbarCartStatus } from "./Navbar";

const headerElement = createNewElement("header");
const mainElement = createNewElement("main");

addNavbar(headerElement);

axios.get("https://artem122ya.github.io/shop-vanilla/src/data.json")
    .then(res => renderCards(res.data.map(el => new Product(el.id, el.name, el.description, el.amount, el.price, null)), mainElement));

document.getElementById("app").appendChild(headerElement);
document.getElementById("app").appendChild(mainElement);

setNavbarCartStatus(1, 20);