import { createNewElement } from "./renderFunctions";


export default class Product {
    constructor(id, name, description, amount, price, pictureUrl) {
        this.pictureUrl = pictureUrl || "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/select/macbook-select-space-gray-201706?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1539399810190";
        this.id = id;
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.price = price;
    }

    createProductElement() {
        const h5 = createNewElement("h5", this.name, "card-title");
        const p = createNewElement("p", this.description, "card-text");
        const priceEl = createNewElement("p", this.price, "card-text");
        const button = createNewElement("a", "Buy", "btn btn-primary", [{name: "href", value: "#"}])
        button.addEventListener("click", e => {
            e.preventDefault();
            console.log(this.id)
        })
    
        const cardBody = createNewElement("div", [h5, p, priceEl, button], "card-body");
    
        const img = createNewElement("img", null, "card-img-top", [{name: "src", value: this.pictureUrl, width: "100%"}])
    
        const card = createNewElement("div", [img, cardBody], "card m-1");
    
        return createNewElement("div", [card], "col-4");
    }
}