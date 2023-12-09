function exportarParaPDF() {
    var tabela = document.getElementById('tabela-medicao');

    // Exportar para XLSX
    var workbook = XLSX.utils.table_to_book(tabela);
    var xlsxBlob = XLSX.write(workbook, { bookType: 'xlsx', type: 'blob' });

    // Converter para PDF
    var xlsxReader = new FileReader();
    xlsxReader.onload = function (event) {
        var data = event.target.result;
        html2pdf().from(data).outputPdf().then(function (pdf) {
            // Após a geração do PDF, abra-o em uma nova janela/tab
            var blob = new Blob([pdf], { type: 'application/pdf' });
            var url = URL.createObjectURL(blob);
            window.open(url, '_blank');
        });
    };
    xlsxReader.readAsDataURL(xlsxBlob);
}