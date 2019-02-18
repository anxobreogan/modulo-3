/* function factorial(numero) {
  /*  console.log(numero); 

  if (numero == 1) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
}

let total = factorial(10);

console.log(total); */
/* 
function enteros(num1, num2) {
  let nextValue = num1 + 1;
  if (nextValue == num2) {
    return "";
  } else {
    return nextValue + " ," + enteros(nextValue, num2);
  }elseif{

  }
}

let resultado = enteros(3, 9);

console.log("[" + resultado + "]");
 */

/* let n = 3;

let arr = Array(n);

arr[0] = "4 6 -1".split(" ").map(arrTemp => parseInt(arrTemp, 10));
arr[1] = "7 2 4".split(" ").map(arrTemp => parseInt(arrTemp, 10));
arr[2] = "10 4 3".split(" ").map(arrTemp => parseInt(arrTemp, 10));

const result = diagonalDifference(arr);
console.log(result);

function diagonalDifference(arr) {
  //recorrer el array filas

  for (let filas = 0; filas < arr.length; filas++) {
    const todalafila = arr[fila];
    for (let columna = 0; columna < todalafila.length; columna++) {
      let valor = todalafila[columna];
      if (fila == columna) {
        let diagonal1 = diagonal1 + valor;
        console.log(diagonal1);
      }
      if (fila + columna == arr.length - 1) {
        let diagonal2 = diagonal2 + valor;
        console.log(diagonal2);
      }
    }
  }
 */
// para cada fila recorrer el array columnas.

//si el indice columnas = al indice de la fila lo sumamos

/* let total = diagonal1 - diagonal2;
  return total;
} */

/* console.log(total); */

/* function factorial(numero) {
  /* console.log(numero); 

  if (numero == 1) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }

  /* return factorial; 
}

let total = factorial(6);

console.log(total); */

/* let Arr = [2, 5, 6];

let multipliedArr = Arr.map(number => number * 2);
let filtro = Arr.filter(number => number > 2);
let reduceA = Arr.reduce((acc, cur) => (acc + cur);
console.log(multipliedArr);
console.log(filtro);
console.log(Arr);
console.log(reduceA);
 */

// function decirHola(a) {
//   return "Hola " + a;
// }

// let resultado = decirHola("Amapola");

// console.log(resultado);
/* 
class Factory {
  constructor() {}
  createEmployee(type) {
    var employee;
    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    } else if (type === "contractor") {
      employee = new Contractor();
    }
    employee.type = type;
    employee.say = function() {
      log.add(this.type + ": rate " + this.hourly + "/hour");
    };
    return employee;
  }
}

class FullTime {
  constructor() {
    this.hourly = "$12";
  }
}

class PartTime {
  constructor() {
    this.hourly = "$11";
  }
}

class Temporary {
  constructor() {
    this.hourly = "$10";
  }
}

class Contractor {
  constructor() {
    this.hourly = "$15";
  }
}

// log helper
var log = (function() {
  var log = "";

  return {
    add: function(msg) {
      log += msg + "\n";
    },
    show: function() {
      console.log(log);
      log = "";
    }
  };
})();

var employees = [];
var factory = new Factory();

employees.push(factory.createEmployee("fulltime"));
employees.push(factory.createEmployee("parttime"));
employees.push(factory.createEmployee("temporary"));
employees.push(factory.createEmployee("contractor"));

for (var i = 0, len = employees.length; i < len; i++) {
  employees[i].say();
}

log.show();
 */

/* function CustomerPrototype(proto) {
  this.proto = proto;

  this.clone = function() {
    var customer = new Customer();

    customer.first = proto.first;
    customer.last = proto.last;
    customer.status = proto.status;

    return customer;
  };
}

function Customer(first, last, status) {
  this.first = first;
  this.last = last;
  this.status = status;

  this.say = function() {
    console.log(
      "name: " + this.first + " " + this.last + ", status: " + this.status
    );
  };
}

var proto = new Customer("n/a", "n/a", "pending");
var prototype = new CustomerPrototype(proto);

var customer = prototype.clone();
customer.say();
 */
