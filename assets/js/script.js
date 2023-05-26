//console.log('probando');
var presupuesto = 0;

function botonesPresupuesto() {
    var btnPresupuesto = document.querySelector('#btnPresupuesto');
    var btnGasto = document.querySelector('#btnGasto');
  //  var cuerpoTablaDos = document.querySelector('#cuerpoTablaDos');
    var calculoGasto = [];

    function Gasto(nombre, monto) {
        this.nombre = nombre;
        this.monto = monto;
    }
    
    
    function obtenerPresupuesto(){
        var ingresaPresupuesto = document.querySelector('#ingresaPresupuestoDos');
        var presupuestoTabla = document.querySelector('#columnaPresupuesto'); //td presupuesto
        presupuesto = parseInt(ingresaPresupuesto.value);
        console.log('mi presupuesto es: ' + presupuesto);

        presupuestoTabla.innerHTML = '$' + presupuesto;
    };
    

    function obtenerGastos(){
    //  var cuerpoTabla = document.querySelector('#cuerpoTabla');
        var nombreGasto = document.querySelector('#nombreGastoDos');
        var cantidadGasto = document.querySelector('#cantidadGastoDos');
        var gasto = new Gasto(nombreGasto.value, cantidadGasto.value);
        calculoGasto.push(gasto);

        //TABLA PRESUPUESTO
        var cuerpoTabla = document.querySelector('#cuerpoTabla');
        var filaPresupuesto = document.createElement('tr');
        var columnaPresupuesto = document.createElement('td');
        var columnaGasto = document.createElement('td');
        var columnaSaldo = document.createElement('td');
        
        filaPresupuesto.setAttribute('id', 'filaPresupuesto');
        columnaPresupuesto.setAttribute('id', 'columnaPresupuesto');
        columnaGasto.setAttribute('id', 'columnaGasto');
        columnaSaldo.setAttribute('id', 'columnaSaldo');

        filaPresupuesto.appendChild(columnaPresupuesto, columnaGasto, columnaSaldo);
        cuerpoTabla.appendChild(filaPresupuesto); 
    
        //TABLA GASTOS
        var cuerpoTablaDos = document.querySelector('#cuerpoTablaDos');//tbody
        var filaGasto = document.createElement('tr');
        var columnaGasto = document.createElement('td');
        var columnaValor = document.createElement('td');
        var columnaEliminar = document.createElement('td');   
        var iconoEliminar = document.createElement('i');

        filaGasto.setAttribute('id', 'filaGasto');
        columnaGasto.setAttribute('id', 'columnaGasto');
        columnaValor.setAttribute('id', 'columnaValor');
        columnaEliminar.setAttribute('id', 'columnaEliminar');
        iconoEliminar.setAttribute('id', 'eliminar');
        iconoEliminar.setAttribute('class', 'fas fa-trash-alt');
    
        columnaGasto.textContent = gasto.nombre;
        columnaValor.textContent = '$' + parseFloat(gasto.monto);
        cuerpoTablaDos.appendChild(filaGasto);
        filaGasto.appendChild(columnaGasto, columnaValor, columnaEliminar); 
        columnaEliminar.appendChild(iconoEliminar);   
    ///
        cantidadGasto.value = '';
        nombreGasto.value = '';
        ///validad que evento para eliminar gasto funciona
        iconoEliminar.addEventListener('click', function () {
            filaGasto.parentNode.removeChild(filaGasto);
            calculoGasto.splice(calculoGasto.indexOf(gasto), 1);
            calcularSaldo();
        }); 
        

    }

    const sumaGastos = () => {
        let suma = 0;
        for (let i = 0; i < calculoGasto.length; i++) {
          suma += parseFloat(calculoGasto[i].monto);
        }
        return '$' + suma;
      };

    function calcularSaldo() {
        let presupuesto = document.querySelector('#columnaPresupuesto');
        let gastos = document.querySelector('#columnaGasto');
        let saldo = document.querySelector('#columnaSaldo');
        let suma = parseFloat(sumaGastos().replace('$', ''));
        gastos.innerHTML = '$' + suma
        saldo.innerHTML = '$' + (parseFloat(presupuesto.innerHTML.replace('$', '')) - suma)
      
        if (parseFloat(saldo.innerHTML.replace('$', '')) < 0) {
            saldo.style.color = 'red';
          } else {
            saldo.style.color = 'green';
          }   
    };


}

btnPresupuesto.addEventListener('click', obtenerPresupuesto);
btnGasto.addEventListener('click', obtenerGastos);


  