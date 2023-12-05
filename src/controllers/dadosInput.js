function calcular() {
    // Obter dados do formulário
    var data = document.getElementById('campo0').value;
    var distanciaEntrePostes = parseFloat(document.getElementById('campo1').value);
    var larguraVia = parseInt(document.getElementById('larguraVia').value);
    var faixasDeRolamento = document.getElementById('faixaRolamento').value;
    var alturaLuminaria = document.getElementById('campo4').value;
    var larguraEstacionamentoA = document.getElementById('campo5').value;
    var larguraEstacionamentoB = document.getElementById('campo6').value;
    var tipoLuminaria = document.getElementById('campo7').value;

    // Selecionar a linha pela classe
    var linha = document.querySelector('.inputMed');

    // Atualizar os valores nas células da linha
    linha.children[0].textContent = data;
    linha.children[1].textContent = distanciaEntrePostes;
    linha.children[2].textContent = larguraVia;
    linha.children[3].textContent = faixasDeRolamento;
    linha.children[4].textContent = alturaLuminaria;
    linha.children[5].textContent = larguraEstacionamentoA;
    linha.children[6].textContent = larguraEstacionamentoB;

    var linha2 = document.querySelector('.inputLuminaria')
    linha2.children[0].textContent = "";
    linha2.children[1].textContent = tipoLuminaria.toUpperCase();

    var linha3 = document.querySelector('.inputEstA')
    linha3.children[0].textContent = "ESTACIONAMENTO A = "+larguraEstacionamentoA.toUpperCase()+ " METROS.";

    var linha4 = document.querySelector('.calculoDist')
    linha4.children[0].textContent = ""
    linha4.children[1].textContent = 0
    linha4.children[2].textContent = (distanciaEntrePostes/2)/2
    linha4.children[3].textContent = distanciaEntrePostes / 2
    linha4.children[4].textContent = (distanciaEntrePostes / 2) + (distanciaEntrePostes/2)/2
    linha4.children[5].textContent = distanciaEntrePostes

    
}

