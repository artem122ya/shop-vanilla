

export class ProductStore {

    constructor(newProductsList = []) {
        this.products = newProductsList;
    }

    setProductList(productsList) {
        this.products = productsList;
    }

    getProductList() {
        return this.products;
    }
}