class Cuenta {
  constructor(ref, nombrecuenta) {
    this.ref = ref;
    this.nombre = nombrecuenta;
  }
}

class Transaccion {
  constructor(remitente, cantidad, receptor, referencia) {
    this.remitente = remitente;
    this.cantidad = cantidad;
    this.receptor = receptor;
    this.referencia = referencia;
  }
}

/* const trans1 = new Transaccion("Paco", 1000, "anxo", 1548);
console.log(trans1); */

class Banco {
  constructor(array, bankAcount) {
    this.array = array;
    this.bankAcount = bankAcount;
  }

  addTransaccion() {
    this.array.push;
  }
}

const transaccion1 = new Banco(222, 2525);

transaccion1.addTransaccion(25698, 5);

console.log(transaccion1);
