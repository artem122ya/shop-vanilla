import { createNewElement } from "./renderFunctions";

export function addNavbar(parentElement) {

	const homeLink = createNewElement("a", "Home", "nav-link", [{name: "href", value: "#"}]);
	const cartLink = createNewElement("a", "Cart (0) 0$", "nav-link", [{name: "href", value: "#"}, {name: "id", value: "cartLink"}]);

	const liItem1 = createNewElement("li", [homeLink], "nav-item");
	const liItem2 = createNewElement("li", [cartLink], "nav-item");

	const ul = createNewElement("ul", [liItem1, liItem2], "navbar-nav");

	const collapse = createNewElement("div", [ul], "collapse navbar-collapse", [{name: "id", value: "navbarSupportedContent"}]);

	const navbarTogglerIcon = createNewElement('span',null,'navbar-toggler-icon');
	const button = createNewElement('button',[navbarTogglerIcon],'navbar-toggler',[
		{name:'data-toggle',value:'collapse'},
		{name:'data-target',value:'#navbarSupportedContent'},
		{name:'aria-controls',value:'navbarSupportedContent'},
		{name:'aria-expanded',value:'false'},
		{name:'aria-label',value:'Toggle navigation'},
	]);

	const brandLink = createNewElement('a','Logo','navbar-brand',[{name:'href',value:'#'}]);

	const nav = createNewElement('nav',[brandLink, button, collapse],'navbar navbar-expand-lg navbar-light bg-light');

	parentElement.appendChild(nav);
}

export function setNavbarCartStatus(amount, totalPrice) {
	document.getElementById("cartLink").innerText = `Cart (${amount}) ${totalPrice}$`;
}