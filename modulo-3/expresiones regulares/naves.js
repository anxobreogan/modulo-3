/*crear clases para nave.
Esta clase contructora crea las naves
*/
class Nave {
  constructor(dano, ptosVida, nombreNave) {
    this.dano = dano;
    this.ptosVida = ptosVida;
    this.nombreNave = nombreNave;
  }
  /*
  El método disparar.
*/
  disparar() {
    //seleccionar una nave.
  }
  /* Método get para ver si una nave tiene ptos de vida */
  get() {
    if (this.ptosVida > 0) {
      return "vivo";
    }
  }
  /*Método para seleccionar naves */
  seleciconar() {}
  /* Método para recibir disparo de otras naves*/
  recibirDisparo() {}
}
/* Clase constructora de las naves tipo 1*/
class TipoNave1 extends Nave {
  constructor() {
    super(10, 5, "Tipo1");
  }
}
/* Clase constructora de las naves tipo 2*/
class TipoNave2 extends Nave {
  constructor() {
    super(5, 10, "Tipo2");
  }
}
/* Clase constructora de las naves tipo 3*/
class TipoNave3 extends Nave {
  constructor() {
    super(8, 7, "Tipo3");
  }
}
/*Clase constructora para crear un ejército*/
class Ejercito {
  constructor(nombreEjercito) {
    this.nombreEjercito = nombreEjercito;
    this.listaNave = [];
  }
}

/* Clase constructora de naves*/
class GeneradorNaves {
  constructor() {}

  CrearEjercito(
    nombreEjercito,
    cantidadClaseI,
    cantidadClaseII,
    cantidadClaseIII
  ) {
    /*Con estos bucles construimos las naves que nos hayan pasado por parámetros, segun el tipo de nave*/

    const ejercito = new Ejercito(nombreEjercito);

    for (let i = 1; i <= cantidadClaseI; i++) {
      const naveI = new TipoNave1();
      ejercito.listaNave.push(TipoNave1);
    }

    for (let i = 1; i <= cantidadClaseII; i++) {
      const naveII = new TipoNave2();
      ejercito.listaNave.push(TipoNave2);
    }

    for (let i = 1; i <= cantidadClaseIII; i++) {
      const naveIII = new TipoNave3();
      ejercito.listaNave.push(TipoNave3);
    }

    return ejercito;
  }
}

class CampoBatalla {
  constructor() {
    this.ejercito1 = null;
    this.ejercito2 = null;
    this.sector1 = new Sector();
    this.sector2 = new Sector();
  }
  DesplegarEjercitos(ejercito1, ejercito2) {
    DesplegarEjercito(sector1, ejercito1);
    DesplegarEjercito(sector2, ejercito2);
  }
  DesplegarEjercito(sector, ejercito) {
    ejercito.listaNave.push();
    for (let i = 0; i < ejercito.listaNave.length; i++) {}
  }
}

class Sector {
  //crear un array vacio;
  constructor() {
    this.arraySector = [];
  }
}

let hola = new GeneradorNaves();
const ejercito1 = hola.CrearEjercito("Forza Depor", 1, 2, 3);
const ejercito2 = hola.CrearEjercito("hola amapola", 10, 1, 1);
console.log(ejercito1);
console.log(ejercito2);
