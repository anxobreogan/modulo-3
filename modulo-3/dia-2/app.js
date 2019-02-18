/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

/* console.log("Probando, probando, 1, 2, 3!"); */

class Poligono {
  constructor(nombre, lados) {
    this.nombre = nombre;
    this.lados = lados;
  }

  getArea() {}
}

class Triangulo extends Poligono {
  constructor(base, altura) {
    super("triangulo", 3);
    this.base = base;
    this.altura = altura;
  }
  getArea(base, altura) {
    return (base * altura) / 2;
  }
}

class Paralepipedo extends Poligono {
  constructor(lado1, lado2) {
    super("paralepipedo", 4);
    this.lado1 = lado1;
    this.lado2 = lado2;
  }
  getArea(lado1, lado2) {
    return lado1 * lado2;
  }
}

class Cuadrado extends Paralepipedo {
  constructor(lado1) {
    super(lado1, lado1); // mi constructor está vacio.
    this.nombre = "cuadrado";
  }
}

class Circulo extends Poligono {
  constructor(radio) {
    super("circulo", 1);
    this.radio = radio;
  }

  getArea(radio) {
    return 3.14159 * radio * radio;
  }
}

const triangulo1 = new Triangulo();

console.log(triangulo1);

const paralepipedo1 = new Paralepipedo();

console.log(paralepipedo1);

const cuadrado1 = new Cuadrado();

console.log(cuadrado1);

const circulo1 = new Circulo();

console.log(circulo1);

/* const poligono1 = new Poligono();

console.log(poligono1); */

console.log(circulo1.getArea(5));
