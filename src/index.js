import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { renderCards } from "./renderFunctions";
import Product from "./Product";



axios.get("https://artem122ya.github.io/shop-vanilla/src/data.json")
    .then(res => renderCards(res.data.map(el => new Product(el.id, el.name, el.description, el.amount, el.price, null))));