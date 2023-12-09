function calculoVia() {
var larguraVia = parseFloat(document.getElementById('larguraVia').value);
var faixasDeRolamento = parseInt(document.getElementById('faixaRolamento').value);

var todasAsLinhas = document.querySelectorAll('.ocultar-faixa1, .ocultar-faixa2');
todasAsLinhas.forEach(function (linha) {
   linha.style.display = ' ';
});

if(faixasDeRolamento === 1){
    medida1 = larguraVia * 0.1
    document.getElementById("medida1cel").innerHTML = medida1.toFixed(2)
    medida2 = larguraVia / 2
    document.getElementById("medida2cel").innerHTML = medida2.toFixed(2)
    medida3 = larguraVia - medida1
    document.getElementById("medida3cel").innerHTML = medida3.toFixed(2)
    document.querySelectorAll('.ocultar-faixa1').forEach(function (linha) {
        linha.style.display = 'none';
    })

} else if(faixasDeRolamento === 2){
    medida1 = (larguraVia / 2) * 0.1
    document.getElementById("medida1cel").innerHTML = medida1.toFixed(2)
    medida2 = (larguraVia / 2) / 2
    document.getElementById("medida2cel").innerHTML = medida2.toFixed(2)
    medida3 = (larguraVia / 2) - ((larguraVia / 2 )* 0.1)
    document.getElementById("medida3cel").innerHTML = medida3.toFixed(2)
    medida4 = (larguraVia / 2) + ((larguraVia / 2) * 0.1)
    document.getElementById("medida4cel").innerHTML = medida4.toFixed(2)
    medida5 = (larguraVia / 2) + medida2
    document.getElementById("medida5cel").innerHTML = medida5.toFixed(2)
    medida6 = larguraVia - medida1
    document.getElementById("medida6cel").innerHTML = medida6.toFixed(2)
    document.querySelectorAll('.ocultar-faixa2').forEach(function (linha) {
        linha.style.display = 'none';
    })
} else if(faixasDeRolamento === 3){
    medida1 = (larguraVia / 3) * 0.1
    document.getElementById("medida1cel").innerHTML = medida1.toFixed(2)
    medida2 = (larguraVia / 3) / 2
    document.getElementById("medida2cel").innerHTML = medida2.toFixed(2)
    medida3 = (larguraVia / 3) - medida1
    document.getElementById("medida3cel").innerHTML = medida3.toFixed(2)
    medida4 = (larguraVia / 3) + medida1
    document.getElementById("medida4cel").innerHTML = medida4.toFixed(2)
    medida5 = (larguraVia / 3) + medida2
    document.getElementById("medida5cel").innerHTML = medida5.toFixed(2)
    medida6 = (larguraVia / 3) * 2  - medida1
    document.getElementById("medida6cel").innerHTML = medida6.toFixed(2)
    medida7 = (larguraVia / 3) * 2  + medida1
    document.getElementById("medida7cel").innerHTML = medida7.toFixed(2)
    medida8 = (larguraVia / 3) * 2  + medida2
    document.getElementById("medida8cel").innerHTML = medida8.toFixed(2)
    medida9 = larguraVia - medida1
    document.getElementById("medida9cel").innerHTML = medida9.toFixed(2)
    
}

}