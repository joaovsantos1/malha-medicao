const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Porta padrão 3000

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Rotas para outras páginas (adapte conforme necessário)
app.get('/modernizacao', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'formsHtml', 'modernizacao.html'));
});

app.get('/malha-medicao', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'formsHtml', 'malhaMedicao.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
