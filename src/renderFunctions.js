
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

function renderCards(cardArray) {

    const row = createNewElement("div", [], "row");
    cardArray.map((card, index) => row.appendChild(card.createProductElement()));
    
    const container = createNewElement("div", [row], "container");
    document.getElementById("app").appendChild(container);
}

export { createNewElement, renderCards }
