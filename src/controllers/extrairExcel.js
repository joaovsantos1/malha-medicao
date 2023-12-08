function exportarParaExcel() {
    const tabela = document.getElementById('tabela-medicao');
    const nomeArquivo = 'dados.xlsx';

    // Criar uma nova planilha
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.table_to_sheet(tabela);

    // Adicionar dados dos inputs à planilha
    const inputs = tabela.querySelectorAll('input');
    let colIndex = 1; // Começar na coluna B (índice 1)
    let rowIndex = 6; // Começar na linha 7 (índice 6)

    inputs.forEach((input, index) => {
      XLSX.utils.sheet_add_aoa(ws, [[input.value]], { origin: XLSX.utils.encode_cell({ r: rowIndex, c: colIndex }) });

      // Atualizar índices para o próximo input
      colIndex++;
      if (colIndex > 5) {
        colIndex = 1;
        rowIndex++;
      }
    });

    // Configurar alinhamento central do texto
    const range = XLSX.utils.decode_range(ws['!ref']);
    for (let row = range.s.r; row <= range.e.r; ++row) {
      for (let col = range.s.c; col <= range.e.c; ++col) {
        const cell = XLSX.utils.encode_cell({ r: row, c: col });
        if (ws[cell] && ws[cell].t === 's') {
          ws[cell].s = { alignment: { horizontal: 'center', vertical: 'center' } };
        }
      }
    }

    // Adicionar a planilha ao livro de trabalho
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');

    // Salvar o arquivo
    XLSX.writeFile(wb, nomeArquivo, { bookType: 'xlsx', bookSST: true, type: 'binary' });
  }