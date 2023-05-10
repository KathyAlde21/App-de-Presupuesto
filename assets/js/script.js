//console.log('probando');
var arregloTablaPresupuesto = [];
var arregloTablaGastos = [];

function presupuestoUno() {
    //primer contenedor - presupuesto
    var colPresupuestoUno = document.querySelector('#colPresupuestoUno');
    colPresupuestoUno.setAttribute('class', 'col');

        var datosPresupuesto = document.createElement('form');
        var contenedorPresupuesto = document.createElement('div');
            var ingresaPresupuestoUno = document.createElement('label');
            var ingresaPresupuestoDos = document.createElement('input');
        var btnPresupuesto = document.createElement('button');
    
        datosPresupuesto.setAttribute('id', 'datosPresupuesto');//form
        datosPresupuesto.setAttribute('class', 'container');
        contenedorPresupuesto.setAttribute('id', 'contenedorPresupuesto');//div
        contenedorPresupuesto.setAttribute('class', 'mb-3');
            ingresaPresupuestoUno.setAttribute('class', 'form-label');//label
            ingresaPresupuestoUno.setAttribute('for', 'ingresaPresupuestoUno');
            ingresaPresupuestoUno.innerHTML = 'Ingresa Tu Presupuesto';
            ingresaPresupuestoDos.setAttribute('class', 'form-control');
            ingresaPresupuestoDos.setAttribute('id', 'ingresaPresupuestoDos');//input
            ingresaPresupuestoDos.setAttribute('type', 'number');
        //información que boton envía a columna dos
        btnPresupuesto.setAttribute('class', 'btn mb-3');
        btnPresupuesto.setAttribute('id', 'btnPresupuesto');
        btnPresupuesto.innerHTML = 'Calcular';
     /*   btnPresupuesto.addEventListener('click', function () {
            //arregloTablaPresupuesto
        });*/
        colPresupuestoUno.append(datosPresupuesto);
        datosPresupuesto.append(contenedorPresupuesto, btnPresupuesto);
        contenedorPresupuesto.append(ingresaPresupuestoUno, ingresaPresupuestoDos); 

    function generaTablaPresupuesto() { /* construyendo tabla columna dos */
        var cuerpoTabla = document.querySelector('#cuerpoTabla');
        var filaPresupuesto = document.createElement('tr');
        var columnaPresupuesto = document.createElement('td');
        var columnaGasto = document.createElement('td');
        var columnaSaldo = document.createElement('td');
    
        filaPresupuesto.appendChild(columnaPresupuesto, columnaGasto, columnaSaldo);
        cuerpoTabla.appendChild(filaPresupuesto);  
    }
    generaTablaPresupuesto();
    
}
presupuestoUno();

/* ----------- segundo bloque - gastos ----------------- */

function gastoUno() {
    //primer contenedor - gatos
    var colGastoUno = document.querySelector('#colGastoUno');
    colGastoUno.setAttribute('class', 'col');

        var datosGasto = document.createElement('form');
        var contenedorGastoUno = document.createElement('div');
            var  nombreGastoUno = document.createElement('label');
            var  nombreGastoDos = document.createElement('input');
        var contenedorGastoDos = document.createElement('div');
            var  cantidadGastoUno = document.createElement('label');
            var  cantidadGastoDos = document.createElement('input');
        var btnGasto = document.createElement('button');
    
        datosGasto.setAttribute('id', 'datosGasto');//form
        datosGasto.setAttribute('class', 'container');

        contenedorGastoUno.setAttribute('id', 'contenedorGastoUno');//div
        contenedorGastoUno.setAttribute('class', 'mb-3');
            nombreGastoUno.setAttribute('class', 'form-label');//label
            nombreGastoUno.setAttribute('for', 'nombreGastoUno');
            nombreGastoUno.innerHTML = 'Ingresa El Nombre Del Gasto';
            nombreGastoDos.setAttribute('class', 'form-control');
            nombreGastoDos.setAttribute('id', 'nombreGastoDos');//input
            nombreGastoDos.setAttribute('type', 'text');
        
        contenedorGastoDos.setAttribute('id', 'contenedorGastoDos');//div
        contenedorGastoDos.setAttribute('class', 'mb-3');
            cantidadGastoUno.setAttribute('class', 'form-label');//label
            cantidadGastoUno.setAttribute('for', 'cantidadGastoUno');
            cantidadGastoUno.innerHTML = 'Ingresa La Cantidad Del Gasto';
            cantidadGastoDos.setAttribute('class', 'form-control');
            cantidadGastoDos.setAttribute('id', 'cantidadGastoDos');//input
            cantidadGastoDos.setAttribute('type', 'number');

        //información que boton envía a columna dos
        btnGasto.setAttribute('class', 'btn mb-3');
        btnGasto.setAttribute('id', 'btnGasto');
        btnGasto.innerHTML = 'Añadir Gasto';
    /*    btnGasto.addEventListener('click', function () {
            //arregloTablaGastos
        });*/
        colGastoUno.append(datosGasto);
        datosGasto.append(contenedorGastoUno, contenedorGastoDos, btnGasto);
        contenedorGastoUno.append(nombreGastoUno, nombreGastoDos);
        contenedorGastoDos.append(cantidadGastoUno, cantidadGastoDos);

    function generaTablaGastos() { /* construyendo tabla columna dos */
        var cuerpoTablaDos = document.querySelector('#cuerpoTablaDos');//tbody
        var filaGasto = document.createElement('tr');
        var columnaGasto = document.createElement('td');
        var textoColumnaGasto = document.createTextNode(textoColumnaGasto.value);
        var columnaValor = document.createElement('td');
        var textoColumnaValor = document.createTextNode(textoColumnaValor.value);
        columnaGasto.appendChild(textoColumnaGasto);
        columnaValor.appendChild(textoColumnaValor)
        filaGasto.appendChild(columnaGasto, columnaValor);    
        cuerpoTablaDos.appendChild(filaGasto);
    }
    generaTablaGastos();
}
gastoUno();

/* ----------- botones ----------------- */

function botonPresupuesto() {
    btnPresupuesto.addEventListener('click', function () {
        //arregloTablaPresupuesto
        e.preventDefault(); //cancelo submit
        var ingresaPresupuestoDos = document.querySelector('#ingresaPresupuestoDos');
        //ingresaPresupuesto.innerHTML = '$' + '';

        

    });

    btnGasto.addEventListener('click', function () {
        //arregloTablaGastos

    });

}
