//console.log('probando');
var presupuesto = 0;
var calculoGasto = [];

var btnPresupuesto = document.querySelector('#btnPresupuesto');
var btnGasto = document.querySelector('#btnGasto');

function Gasto(nombre, monto) {
    this.nombre = nombre;
    this.monto = monto;
}

function obtenerPresupuesto(){ //FUNCIONANDO
  //  var tablaPresupuesto = document.querySelector('#tablaPresupuesto'); //tbody
  // var filaPresupuesto = document.querySelector('#filaPresupuesto');
    var presupuestoFront = document.querySelector('#presupuesto');
    var presupuestoTabla = document.querySelector('#tdPresupuesto'); //td presupuesto
    presupuesto = parseInt(presupuestoFront.value);
    console.log('mi presupuesto es: ' + presupuesto);
    presupuestoTabla.innerHTML = '$ ' + presupuesto;
}

function obtenerGasto(){
  var nombreFront = document.querySelector('#nombre');
  var cantidadFront = document.querySelector('#cantidad');
  let nuevoGasto = new Gasto(nombreFront.value, parseInt(cantidadFront.value));
  calculoGasto.push(nuevoGasto);
  gastosEnPantalla();
}

function gastosEnPantalla(){
  var tbTablaPrepuesto = document.querySelector('#tablaGasto');
  var gastosTotales = document.querySelector('#tdGasto');
  var saldoFront = document.querySelector('#tdSaldo');
  var tdPresupuesto = '';
  var sumasGastos = 0;
  for (let miGasto of calculoGasto){
    sumasGastos = '$ ' + (sumasGastos + miGasto.monto);
    tdPresupuesto += 
    `
    <tr>
      <td>${miGasto.nombre}</td>
      <td><b id="violeta">${miGasto.monto}</b></td>
      <td><i id="iconoEliminar" class="fas fa-trash-alt"></i></td>
    </tr> `;
  }
  tbTablaPrepuesto.innerHTML = tdPresupuesto;
  gastosTotales.innerHTML = sumasGastos;
  saldoFront.innerHTML = '$ ' + (presupuesto - sumasGastos);

}

function eliminarGastos{
  var tdEliminar = document.querySelector('#iconoEliminar');

}

btnPresupuesto.addEventListener('click', obtenerPresupuesto); //ok
btnGasto.addEventListener('click', obtenerGasto); //ok


  