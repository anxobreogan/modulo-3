/* class Product {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}
const product1 = new Product("leche", 1);
console.log(product1.precio);

class Book extends Product {
  constructor(nombre, precio, author) {
    super(nombre, precio);

    this.author = author;
  }
}

const book1 = new Book("La tabla de Flandes", 20, "Arturo Perez Reverte");

console.log(book1.nombre, product1.nombre);

class Basket {
  constructor() {
    this.products = [];
  }

  addProduct(amount, product) {
    this.products.push(...Array(amount).fill(product));
  }
  calcTotal() {
    return this.products
      .map(product => product.precio)
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
 */

/* let A = 99;
let B = -0.01;
let C = -896523;

if (typeof A == "number" && typeof B == "number" && typeof C == "number") {
  let V1 = Math.trunc((A + B + Math.abs(A - B)) / 2);

  let V2 = Math.trunc((V1 + C + Math.abs(V1 - C)) / 2);

  console.log(V2 + " eh o maior");
}
 */