const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this);
  }

  // static ensures that the method can be called on the class itself & not an instatiated object
  static fetchAll() {
    return products;
  }
};
