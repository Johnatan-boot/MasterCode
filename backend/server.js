const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Caminhos base
const rootPath = path.join(__dirname, '..');
const viewsPath = path.join(rootPath, 'views');
const publicPath = path.join(__dirname, '..', 'public');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(publicPath)); // Serve CSS, JS, imagens etc.

// Rotas
app.get('/', (req, res) => res.sendFile(path.join(viewsPath, 'home.html'))); // Home principal
app.get('/servicos', (req, res) => res.sendFile(path.join(viewsPath, 'servicos.html')));
app.get('/form-email', (req, res) => res.sendFile(path.join(viewsPath, 'form-email.html')));

app.get('/', (req, res) => res.sendFile(path.join(viewsPath, 'index.html')));
app.get('/home', (req, res) => res.sendFile(path.join(viewsPath, 'home.html')));
app.get('/login', (req, res) => res.sendFile(path.join(viewsPath, 'login.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(viewsPath, 'dashboard.html')));
app.get('/servicos', (req, res) => res.sendFile(path.join(viewsPath, 'servicos.html')));
app.get('/form-email', (req, res) => res.sendFile(path.join(viewsPath, 'form-email.html')));

// Rota POST
app.post('/form-email', (req, res) => {
  console.log('📨 Dados do formulário:', req.body);
  res.send('Obrigado por enviar o formulário!');
});

// Início do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
