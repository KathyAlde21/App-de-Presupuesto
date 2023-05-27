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
    var presupuestoFront = document.querySelector('#presupuesto');
    var presupuestoTabla = document.querySelector('#tdPresupuesto');
    presupuesto = parseInt(presupuestoFront.value);
    console.log('mi presupuesto es: ' + presupuesto);
    presupuestoTabla.innerHTML = '$ ' + presupuesto;
}

//asociada a segundo boton
//se suman los valores de tabla gasto y muestran en tabla presupuesto
function obtenerGasto(){
  var nombreFront = document.querySelector('#nombre');
  var cantidadFront = document.querySelector('#cantidad');
  let nuevoGasto = new Gasto(nombreFront.value, parseInt(cantidadFront.value));
  calculoGasto.push(nuevoGasto);
  gastosEnPantalla();
}

//asociada a segundo boton - creacion segunda tabla
function gastosEnPantalla(){
  var tbTablaPrepuesto = document.querySelector('#tablaGasto');
  var gastosTotales = document.querySelector('#tdGasto');
  var saldoFront = document.querySelector('#tdSaldo');
  var tdPresupuesto = '';
  var sumasGastos = 0;
  for (let miGasto of calculoGasto){
    sumasGastos = sumasGastos + miGasto.monto;
    tdPresupuesto += 
    `
    <tr id="filaGasto">
      <td>${miGasto.nombre}</td>
      <td><i id="fa" class="fa fa-usd"></i><b id="violeta">${miGasto.monto}</b></td>
      <td onclick="eliminarGastos()"><i id="iconoEliminar" class="fas fa-trash-alt"></i></td>
    </tr> `;
  }
  tbTablaPrepuesto.innerHTML = tdPresupuesto;
  gastosTotales.innerHTML = '$ ' + sumasGastos;
  saldoFront.innerHTML = presupuesto - sumasGastos;
}

//asociado a segunda tabla - boton eliminar
function eliminarGastos(){
 // console.log('probando');
  let tr = document.querySelector('#filaGasto');
  tr.remove();
  //console.log(eliminarGastos);
  
}

btnPresupuesto.addEventListener('click', obtenerPresupuesto); //ok
btnGasto.addEventListener('click', obtenerGasto); //ok