function gerarPDF() {
    var columns = [
        {title: "Medida", dataKey: "medida"},
        {title: "Dados", dataKey: "dados"}
    ];

    var rows = [];
    var medida = 1;

    // Preencha as linhas aqui com os dados da tabela HTML
    while ($('.colMed' + medida, 'table').length) {
        var row = $('.colMed' + medida, 'table');
        var dados = row.find('input[type="text"]').map(function () {
            return $(this).val();
        }).get();

        rows.push({medida: medida, dados: dados.join(', ')});
        medida++;
    }

    var element = document.createElement('table');
    element.innerHTML = '<tr><th>Medida</th><th>Dados</th></tr>';

    rows.forEach(function (row) {
        var tr = document.createElement('tr');
        var tdMedida = document.createElement('td');
        var tdDados = document.createElement('td');

        tdMedida.textContent = row.medida;
        tdDados.textContent = row.dados;

        tr.appendChild(tdMedida);
        tr.appendChild(tdDados);
        element.appendChild(tr);
    });

    var opt = {margin: 1};
    html2pdf().from(element).set(opt).save('tabela.pdf');
}
