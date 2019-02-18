/*Creamos una clase constructora para crear las distintas cuentas
numeroCuenta=el numero de cuenta.
tipo=si es empresa o particular
saldo=saldo de la cuenta */
class Cuentas {
  constructor(numeroCuenta, tipo, saldo) {
    this.numeroCuenta = numeroCuenta;
    this.tipo = tipo;
    this.saldo = saldo;
  }
}

let cuenta1 = new Cuentas(101, "particular", 1000);
let cuenta2 = new Cuentas(202, "particular", 5000);

/* console.log(cuenta1);
console.log(cuenta2); */

class Transferencias {
  constructor(cantidad, remitente, destino) {
    this.cantidad = cantidad;
    this.remitente = remitente;
    this.destino = destino;
  }
}
