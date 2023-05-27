

/* --------- FUNCIONANDO HASTA AQUI -------------- */

/*
function obtenerGastos(){
    var nombre = document.querySelector('#nombre');
    var nombreGasto = document.querySelector('#tdNombre');
   // nombre = nombreGasto.textContent;
    nombreGasto.textContent = nombre;
    console.log('el nombre del gasto es: ' + nombre); //lee raro pero sabe que hay algo, editar texto
    nombreGasto.innerHTML = nombre;

////

    var cantidad = document.querySelector('#cantidad');
    var cantidadGasto = document.querySelector('#tdCantidad');
    cantidad = parseInt(cantidad.value);
    console.log('mi cantidad de gasto es: ' + cantidad); //lee que en cantidad va este valor y la imprime
    cantidadGasto.innerHTML = '$' + cantidad;
    
    var presupuestoGasto = document.querySelector('#tdGasto');
    console.log('mi cantidad de gasto es: ' + cantidad); //lee que en cantidad va este valor y la imprime
    presupuestoGasto.innerHTML = '$' + cantidad;
*/


/////// LO ESCRIBE UNO AL LADO DEL OTRO ///////// 
/*
    function obtenerGastos(){
      //  var tablaGasto = document.querySelector('#tablaGasto');//tbody
        var filaGasto = document.querySelector('#filaGasto'); //tr tbody
    
        var nombre = document.querySelector('#nombre');
     //   var nombreGasto = document.querySelector('#tdNombre');
        var nombreGasto = document.createElement('td');
        nombreGasto.setAttribute('id', 'tdNombre');
       // nombre = nombreGasto.textContent;
      //  nombreGasto.textContent = nombre;
        console.log('el nombre del gasto es: ' + nombre); //lee raro pero sabe que hay algo, editar texto
        nombreGasto.innerHTML = nombre; 

    ////
    
        var cantidad = document.querySelector('#cantidad');
       // var cantidadGasto = document.querySelector('#tdCantidad');
        var cantidadGasto = document.createElement('td');
        cantidadGasto.setAttribute('id', 'tdCantidad');
        //
        cantidad = parseInt(cantidad.value);
        console.log('mi cantidad de gasto es: ' + cantidad); //lee que en cantidad va este valor y la imprime
        cantidadGasto.innerHTML = '$' + cantidad;
        
        
        var presupuestoGasto = document.querySelector('#tdGasto');
        console.log('mi cantidad de gasto es: ' + cantidad); //lee que en cantidad va este valor
        presupuestoGasto.innerHTML = '$' + cantidad;
    
        ////////////////
        var tdEliminar = document.createElement('td');   
        var iconoEliminar = document.createElement('i');
        tdEliminar.setAttribute('id', 'tdEliminar');
        iconoEliminar.setAttribute('id', 'iconoEliminar');
        iconoEliminar.setAttribute('class', 'fas fa-trash-alt');
        iconoEliminar.setAttribute('style', 'font-size:110%; color: rgb(5, 176, 5)');


        ////
      //  tablaGasto.appendChild(filaGasto);
       // filaGasto.appendChild(nombreGasto, cantidadGasto, tdEliminar);
        filaGasto.appendChild(nombreGasto, cantidadGasto, tdEliminar);
        tdEliminar.appendChild(iconoEliminar);


        //arreglo para guardar gasto



///
   // cantidadGasto.value = '';
   // nombreGasto.value = '';
  /*  
    ///validad que evento para eliminar gasto funciona
    iconoEliminar.addEventListener('click', function () {
        filaGasto.parentNode.removeChild(filaGasto);
    //    calculoGasto.splice(calculoGasto.indexOf(gasto), 1);
     //   calcularSaldo();
    }); 
    

}*/
/*
const sumaGastos = () => {
    let suma = 0;
    for (let i = 0; i < calculoGasto.length; i++) {
      suma += parseFloat(calculoGasto[i].monto);
    }
    return '$' + suma;
  };

function calcularSaldo() {
    let presupuesto = document.querySelector('#tdPresupuesto');
    let gastos = document.querySelector('#tdGasto');
    let saldo = document.querySelector('#tdSaldo');
    let suma = parseFloat(sumaGastos().replace('$', ''));
    gastos.innerHTML = '$' + suma
    saldo.innerHTML = '$' + (parseFloat(presupuesto.innerHTML.replace('$', '')) - suma)
  
    if (parseFloat(saldo.innerHTML.replace('$', '')) < 0) {
        saldo.style.color = 'red';
      } else {
        saldo.style.color = 'green';
      }   
  };*/
