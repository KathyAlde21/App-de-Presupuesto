//console.log('probando');
var presupuesto = 0;
var calculoGasto = [];

var btnPresupuesto = document.querySelector('#btnPresupuesto');
var btnGasto = document.querySelector('#btnGasto');

function Gasto(nombre, monto) {
    this.nombre = nombre;
    this.monto = monto;
}

//asociada a primer boton - ingresa presupuesto
function obtenerPresupuesto(){
    var presupuestoFront = document.querySelector('#presupuesto'); //Ingresa Tu Presupuesto
    var presupuestoTabla = document.querySelector('#tdPresupuesto'); // presupuesto en tabla
    presupuesto = parseInt(presupuestoFront.value);
    console.log('mi presupuesto es: ' + presupuesto);
    presupuestoTabla.innerHTML = '$ ' + presupuesto;
}

//asociada a segundo boton
//se suman los valores de tabla gasto y muestran en tabla presupuesto
function obtenerGasto(){
  var nombreFront = document.querySelector('#nombre'); //Ingresa El Nombre Del Gasto
  var cantidadFront = document.querySelector('#cantidad'); //Ingresa La Cantidad Del Gasto
  let nuevoGasto = new Gasto(nombreFront.value, parseInt(cantidadFront.value));
  calculoGasto.push(nuevoGasto);
  gastosEnPantalla();
}

//asociada a segundo boton - creacion segunda tabla
function gastosEnPantalla(){
  var tbTablaPrepuesto = document.querySelector('#tablaGasto');
  var gastosTotales = document.querySelector('#tdGasto'); //texto gasto - segunda tabla
  var saldoFront = document.querySelector('#tdSaldo'); //monto gasto - segunda tabla
  var tdPresupuesto = ''; //presupuesto - primera tabla, se incrementa con cada línea
  var sumasGastos = 0;

  for (let miGasto of calculoGasto){ //viene de fx obtenerGasto
    sumasGastos = sumasGastos + miGasto.monto;
    tdPresupuesto += 
    `
    <tr id="filaGasto">
      <td>${miGasto.nombre}</td>
      <td><i id="fa" class="fa fa-usd"></i><b id="violeta">${miGasto.monto}</b></td>
      <td onclick="eliminarGastos()"><i id="iconoEliminar" class="fas fa-trash-alt"></i></td>
    </tr> `;
  }

  tbTablaPrepuesto.innerHTML = tdPresupuesto; //presupuesto - primera tabla
  gastosTotales.innerHTML = '$ ' + sumasGastos; //suma gastos menos presupuesto - primera tabla
  saldoFront.innerHTML = presupuesto - sumasGastos; //monto gasto - segunda tabla
}

//asociado a segunda tabla - boton eliminar
function eliminarGastos(){
 // console.log('probando');
  let tr = document.querySelector('#filaGasto');
  tr.remove();
 // nuevoSaldo();
  //console.log(eliminarGastos);
}

btnPresupuesto.addEventListener('click', obtenerPresupuesto); //ok
btnGasto.addEventListener('click', obtenerGasto); //ok