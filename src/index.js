import "bootstrap/dist/css/bootstrap.min.css";

function createNewElement(tag, content = null, className = null, attributes = null) {
    const element = document.createElement(tag);
    if (content) element.innerText = content;
    if (className) element.className = className;
    if (attributes && attributes.length) attributes.map(attribute => element.setAttribute(attribute.name, attribute.value));
    return element;
}

function appendChildrenToParrent(parent, children) {
    children.map(child => parent.appendChild(child));
}