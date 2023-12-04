// calculadoraModel.js

function calcularDistancias(distanciaEntrePostes) {
    var resultado = {};

    resultado.distanciaCalculada1 = 0;
    resultado.distanciaCalculada2 = (distanciaEntrePostes / 2) / 2;
    resultado.distanciaCalculada3 = distanciaEntrePostes / 2;
    resultado.distanciaCalculada4 = distanciaEntrePostes / 2 + resultado.distanciaCalculada2;
    resultado.distanciaCalculada5 = distanciaEntrePostes;

    return resultado;
}
