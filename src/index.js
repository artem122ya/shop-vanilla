import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function createNewElement(tag, content = null, className = null, attributes = null) {
    const element = document.createElement(tag);
    if (content != null && typeof content == "object") appendChildrenToParrent(element, content); 
    else if (content) element.innerText = content;
    if (className) element.className = className;
    if (attributes && attributes.length) attributes.map(attribute => element.setAttribute(attribute.name, attribute.value));
    return element;
}

function appendChildrenToParrent(parent, children) {
    children.map(child => parent.appendChild(child));
}

// fetch("https://artem122ya.github.io/shop-vanilla/src/data.json")
//     .then(response => response.json())
//     .then(res => console.log(res));


axios.get("https://artem122ya.github.io/shop-vanilla/src/data.json").then(res => console.log(res.data));

const h5 = createNewElement("h5", "Card title", "card-title");
const p = createNewElement("p", "text", "card-text");
const price = createNewElement("p", "1223", "card-text");
const a = createNewElement("a", "Buy", "btn btn-primary", [{name: "href", value: "#"}])


const cardBody = createNewElement("div", [h5, p, price, a], "card-body");

const img = createNewElement("img", null, "card-img-top", [{name: "src", value: "http://lorempixel.com/640/480"}])

const card = createNewElement("div", [img, cardBody], "card");
const col = createNewElement("div", [card], "col-4");

const row = createNewElement("div", [col], "row");
const container = createNewElement("div", [row], "container");
document.getElementById("app").appendChild(container);