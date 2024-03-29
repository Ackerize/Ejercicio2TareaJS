window.onload = function (){
    var tablaCuerpo = document.getElementById("table_body")    
    var boton = document.getElementById("submit_btn")
    var d = new Date

    verificarLongitud(boton)

    boton.addEventListener("click", ()=>{
        var fila = document.createElement("tr")
        var celdaEvento = document.createElement("td")
        var celdaAccidente = document.createElement("td")
        var celdaFecha = document.createElement("td")

        celdaAccidente.innerHTML = ( document.getElementById("accident_switch").checked ) ? "Si" : "No"
        celdaEvento.innerHTML = document.getElementById("event_field").value
        celdaFecha.innerHTML = d.toLocaleString()

        fila.appendChild(celdaEvento);
        fila.appendChild(celdaAccidente);
        fila.appendChild(celdaFecha);
        tablaCuerpo.appendChild(fila);
    });
};

function verificarLongitud(boton){
    var cajaTexto =document.getElementById("event_field")
    var validarLetras = /^[a-z0-9_.-]+$/i
    
    cajaTexto.addEventListener("keyup", ()=>{
        if(validarLetras.test(cajaTexto.value))
            boton.disabled = false
        else
            boton.disabled = true
    });
}


