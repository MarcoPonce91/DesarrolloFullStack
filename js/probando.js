var contador = 0;
const total = 4;

document.getElementById("boton").onclick = function () {
    contador++;
    var resta = (total - contador);

    if (respuesta == "montaña") {
        alert("La respuesta es acertada");
    } else {
        if (contador == 2) {
            alert("Hay más bajas o más altas");
            return false;
        } else {
            if (contador == 3) {
                alert("Manos y pies quedan al piso");
                return false;
            } else if (contador == 4) {
                alert("el resultado es MONTAÑA");
                return false;
            }



        }
        document.getElementById("mostrar").innerHTML = contador;
        document.getElementById("restar").innerHTML = contador;
        event.preventDefault();
    }

}
