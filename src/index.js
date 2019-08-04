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

function createProductElement(name, description, amount, price,
    pictureUrl = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/select/macbook-select-space-gray-201706?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1539399810190") {
    const h5 = createNewElement("h5", name, "card-title");
    const p = createNewElement("p", description, "card-text");
    const priceEl = createNewElement("p", price, "card-text");
    const a = createNewElement("a", "Buy", "btn btn-primary", [{name: "href", value: "#"}])


    const cardBody = createNewElement("div", [h5, p, priceEl, a], "card-body");

    const img = createNewElement("img", null, "card-img-top", [{name: "src", value: pictureUrl, width: "100%"}])

    return createNewElement("div", [img, cardBody], "card col-4");
}

function renderCards(cardArray) {

    const row = createNewElement("div", [], "row");
    cardArray.map(card => row.appendChild(createProductElement(card.name, card.description, card.amount, card.price)));
    
    const container = createNewElement("div", [row], "container");
    document.getElementById("app").appendChild(container);
}


axios.get("https://artem122ya.github.io/shop-vanilla/src/data.json").then(res => renderCards(Object.values(res.data)));