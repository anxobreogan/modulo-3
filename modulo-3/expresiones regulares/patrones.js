/* class Banco {
  constructor(nombre) {
    this.nombre = nombre;
    this.listaClientes = [];
    this.listaCuentas = [];
    this.listaSubscritores = [];
  }

  CreateCuenta(cliente) {
    let nuevaCuenta = new Cuenta(cliente, this, "Personal");
    this.listaCuentas.push(nuevaCuenta);
    this.listaClientes.push(cliente);
    cliente.AddCuenta(cuenta);
    return nuevaCuenta;
  }

  CreateCliente(nombreCliente) {
    let cliente = new Cliente(nombreCliente);
    this.listaClientes.push(nombreCliente);
    return nombreCliente;
  }
}

/* function Factory() {
  this.createCuenta = function(type) {
    let Cuenta;

    if (type == "Personal") {
      Cuenta = new Personal();
    } else if (type == "Bussines") {
      Cuenta = new Busines();
    }
  };
} */

/* class Cuenta {
  constructor(cliente, banco, tipoCuenta) {
    this.cliente = cliente;
    this.banco = banco;
    this.saldo = 0;
    this.tipoCuenta = tipoCuenta;
  }
}

class Cliente {
  constructor(nombreCliente) {
    this.listaCuentas = [];
    this.nonmbreCliente = nombreCliente;
  }
  AddCuenta(nuevaCuenta) {
    this.listasCuentas.push(cuenta);
    return nuevaCuenta;
  }
} */

/* let banco = new Banco("Tararí");
let cliente1 = banco.CreateCliente("Hola");
let cliente2 = banco.CreateCliente("fjkdkd");
let cuenta1 = banco.CreateCuenta(cliente1);
let cuenta2 = banco.CreateCuenta(cliente1);
let cuenta3 = banco.CreateCuenta(cliente2); */

/////////

/* class Banco {
  constructor(nombre) {
    this.nombre = nombre;
    this.cuentas = [];
    this.clientes = [];
    this.subscriptores = [];
    this.cuentaBase = null;
  }
  CrearCuenta(cliente) {
    const nuevaCuenta = new Cuenta(cliente, this);
    this.AnadirCuenta(nuevaCuenta);
    this.AnadirCliente(cliente);
    cliente.AnadirCuenta(nuevaCuenta);
    return nuevaCuenta;
  }
  CrearCliente(nombreCliente) {
    const nuevoCliente = new Cliente(nombreCliente);
    this.AnadirCliente(nuevoCliente);
    return nuevoCliente;
  }
  AnadirCliente(cliente) {
    if (this.clientes.indexOf(cliente) === -1) {
      this.clientes.push(cliente);
    }
  }
  AnadirCuenta(cuenta) {
    if (this.cuentas.indexOf(cuenta) === -1) {
      this.cuentas.push(cuenta);
    }
  }
  CrearCuentaBase(cuentaBase) {
    this.cuentaBase = cuentaBase;
  }
}

class Cuenta {
  constructor(cliente, banco) {
    this.cliente = cliente;
    this.banco = banco;
    this.saldo = 0;
    this._comision = 0;
  }

  get Comision() {
    return this._comision;
  }

  set Comision(nuevaComision) {
    return (this._comision = nuevaComision);
  }
}
class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
    this.cuentas = [];
  }
  AnadirCuenta(cuenta) {
    if (this.cuentas.indexOf(cuenta) === -1) {
      this.cuentas.push(cuenta);
    }
  }
}

const banco = new Banco("BBVA");
const cliente1 = banco.CrearCliente("Marcos");
const cliente2 = banco.CrearCliente("Javier");
const cuenta1 = banco.CrearCuenta(cliente1);
const cuenta2 = banco.CrearCuenta(cliente1);
const cuenta3 = banco.CrearCuenta(cliente2);

 */
////////////////////////////////
/* 
class Banco {
  constructor(nombre) {
    this.nombre = nombre;
    this.cuentas = [];
    this.clientes = [];
    this.subscriptores = [];
    this.cuentaBase = null;
  }

  CrearCuenta(cliente) {
    const nuevaCuenta = this.GenerarCuenta(cliente);
    this.AnadirCuenta(nuevaCuenta);
    this.AnadirCliente(cliente);
    cliente.AnadirCuenta(nuevaCuenta);
    return nuevaCuenta;
  }
  CrearCliente(nombreCliente) {
    const nuevoCliente = new Cliente(nombreCliente);
    this.AnadirCliente(nuevoCliente);
    return nuevoCliente;
  }

  AnadirCliente(cliente) {
    if (this.clientes.indexOf(cliente) === -1) {
      this.clientes.push(cliente);
    }
  }
  AnadirCuenta(cuenta) {
    if (this.cuentas.indexOf(cuenta) === -1) {
      this.cuentas.push(cuenta);
    }
  }
  EstablecerCondiciones(cuentaBase) {
    this.cuentaBase = cuentaBase;
  }
  GenerarCuenta(cliente) {
    const nuevaCuenta = new Cuenta(cliente, this);
    if (this.cuentaBase) {
      nuevaCuenta.Comision = this.cuentaBase.Comision;
    }
    return nuevaCuenta;
  }
  Suscribir(cliente){

    
      this.cliente.push();
    


  }
  Desuscribir(cliente) {

    this.subscriptores=this.suscritores.filter(
      function(cliente){

      }
    )
    

  }
  LanzaPubli(texto)
{

}  
  /* Click() {
    this.cliente = [];
  }

  Click= {
    desuscribe: function(fn) {
      this.subscritores.push(fn);
    },

    desubscribe: function(fn) {
      this.subscritores = this.suscritores.filter(function(cliente) {
        if (cliente !== fn) {
          return cliente;
        }
      });
    },

    fire: function(o, thisObj) {
      var scope = thisObj;
      this.handlers.forEach(function(item) {
        item.call(scope, o);
      });
    }
  }; */
/* }

class Cuenta {
  constructor(cliente, banco) {
    this.cliente = cliente;
    this.banco = banco;
    this.saldo = 0;
    this._comision = 0;
  }
  get Comision() {
    return this._comision;
  }
  set Comision(nuevaComision) {
    this._comision = nuevaComision;
  }
}
class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
    this.cuentas = [];
  }
  AnadirCuenta(cuenta) {
    if (this.cuentas.indexOf(cuenta) === -1) {
      this.cuentas.push(cuenta);
    }
  }
}

const banco = new Banco("BBVA");
const cliente1 = banco.CrearCliente("Marcos");
const cliente2 = banco.CrearCliente("Javier");
const cuenta1 = banco.CrearCuenta(cliente1);

const cuentaFicticia = new Cuenta(null, banco);
cuentaFicticia.Comision = 1;
banco.EstablecerCondiciones(cuentaFicticia);
const cuenta2 = banco.CrearCuenta(cliente1);
const cuentaFicticia2 = new Cuenta(null, banco);
cuentaFicticia2.Comision = 2;
banco.EstablecerCondiciones(cuentaFicticia2);

const cuenta3 = banco.CrearCuenta(cliente2);

 */

/////////////////////////////////////////

class Banco {
  constructor(nombre) {
    this.nombre = nombre;
    this.cuentas = [];
    this.clientes = [];
    this.subscriptores = [];
    this.cuentaBase = null;
  }

  CrearCuenta(cliente) {
    const nuevaCuenta = this.GenerarCuenta(cliente);
    this.AnadirCuenta(nuevaCuenta);
    this.AnadirCliente(cliente);
    cliente.AnadirCuenta(nuevaCuenta);
    return nuevaCuenta;
  }
  CrearCliente(nombreCliente) {
    const nuevoCliente = new Cliente(nombreCliente);
    this.AnadirCliente(nuevoCliente);
    return nuevoCliente;
  }

  AnadirCliente(cliente) {
    if (this.clientes.indexOf(cliente) === -1) {
      this.clientes.push(cliente);
    }
  }
  AnadirCuenta(cuenta) {
    if (this.cuentas.indexOf(cuenta) === -1) {
      this.cuentas.push(cuenta);
    }
  }
  EstablecerCondiciones(cuentaBase) {
    this.cuentaBase = cuentaBase;
  }
  GenerarCuenta(cliente) {
    const nuevaCuenta = new Cuenta(cliente, this);
    if (this.cuentaBase) {
      nuevaCuenta.Comision = this.cuentaBase.Comision;
    }
    return nuevaCuenta;
  }
  Subscribe(cliente) {
    if (this.subscriptores.indexOf(cliente) === -1) {
      this.subscriptores.push(cliente);
    }
  }

  Unsubscribe(cliente) {
    this.subscriptores = this.subscriptores.filter(function(item) {
      if (item !== cliente) {
        return item;
      }
    });
  }

  LanzarCampanaComunicacion(textoCampana) {
    var scope = this;
    this.subscriptores.forEach(function(cliente) {
      cliente.LeerComunicacion(scope, textoCampana);
    });
  }
}

class Cuenta {
  constructor(cliente, banco) {
    this.cliente = cliente;
    this.banco = banco;
    this.saldo = 0;
    this._comision = 0;
  }
  get Comision() {
    return this._comision;
  }
  set Comision(nuevaComision) {
    this._comision = nuevaComision;
  }
}
class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
    this.cuentas = [];
  }
  AnadirCuenta(cuenta) {
    if (this.cuentas.indexOf(cuenta) === -1) {
      this.cuentas.push(cuenta);
    }
  }
  LeerComunicacion(scope, textoCampana) {
    console.log(
      "Cliente " +
        this.nombre +
        " recibe correo de " +
        scope.nombre +
        " con texto:" +
        textoCampana
    );
  }
}

const banco = new Banco("BBVA");
const cliente1 = banco.CrearCliente("Marcos");
const cliente2 = banco.CrearCliente("Javier");
const cuenta1 = banco.CrearCuenta(cliente1);

const cuentaFicticia = new Cuenta(null, banco);
cuentaFicticia.Comision = 1;
banco.EstablecerCondiciones(cuentaFicticia);
const cuenta2 = banco.CrearCuenta(cliente1);
const cuentaFicticia2 = new Cuenta(null, banco);
cuentaFicticia2.Comision = 2;
banco.EstablecerCondiciones(cuentaFicticia2);

const cuenta3 = banco.CrearCuenta(cliente2);

banco.Subscribe(cliente1);
banco.Subscribe(cliente2);
banco.LanzarCampanaComunicacion("Campaña 2019A");
banco.Unsubscribe(cliente2);
banco.LanzarCampanaComunicacion("Campaña 2019B");
