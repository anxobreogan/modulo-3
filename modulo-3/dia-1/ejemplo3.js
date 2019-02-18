///ES6

class Product {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const product1 = new Product("leche", 100);

console.log(product1);

class Book extends Product {
  constructor(
    name,
    price,
    author
  ) /*aqui está el error sería precio y nombre*/ {
    super(name, price);
    this.author = author;
  }
}

const book1 = new Book("La tabla de Falndes", 10, "Arturo ");

class Basket {
  constructor() {
    this.products = [];
  }
  addProduct(amount, product) {
    this.products.push(...Array(amount).fill(product));
  }
  calcTotal() {
    return this.products
      .map(product => product.price)
      .reduce((a, b) => a + b, 0);
  }
  printShoppingInfo() {
    console.log("one has to pay in total: " + this.calcTotal());
  }
}

const bread = new Product(`bread`, 1);
const water = new Product(`water`, 0.25);

const faust = new Book(`Faust`, 10, `Anxo Fuentes`);
const basket = new Basket();
basket.addProduct(2, bread);
basket.addProduct(4, water);
basket.addProduct(1, faust);
basket.printShoppingInfo();
