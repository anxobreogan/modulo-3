function Profesor(nombre, edad) {
  (this.nombre = nombre), (this.edad = edad);
}

const profesor1 = new Profesor("Marcos", 44);
console.log(profesor1.nombre);
profesor1.nombre = `Marcos Javier`;
console.log(profesor1.nombre);
Profesor.prototype.soyElProfe = function() {
  console.log("soy el profesor " + this.nombre);
};

profesor1.soyElProfe();

const profesor2 = new Profesor("David Estevez", 69);

profesor2.soyElProfe();

Profesor.prototype.cumpleanos = function() {
  console.log("tengo " + (this.edad + 1));
};

profesor2.cumpleanos();
