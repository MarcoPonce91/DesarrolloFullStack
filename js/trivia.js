function verificarRespuestas() {

    var total = 4;
    var puntos = 0;
    var miFormulario = document.forms["cuestionario"];
    var respuestas = ["a", "b", "c", "b"];

    for (var i = 1; i <= total; i++) {
        if (miFormulario["p" + i].value === null || miFormulario["p" + i].value === "") {
            alert("Debes responder la pregunta" + i);
            return false;
        } else {
            if (miFormulario["p" + i].value === respuestas[i - 1]) {
                puntos++;
            
            }

        }
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h5> Obtuviste <span> ' + puntos + '</span> de <span>' + total + ' puntos </span> </h5>';

    return false;

}