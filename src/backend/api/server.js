const express = require('express');
const path = require('path');

const app = express();

// Caminhos base (ajuste conforme sua estrutura)
const rootPath = path.resolve(__dirname, '../../');
const viewsPath = path.join(rootPath, 'views');
const publicPath = path.join(rootPath, 'public');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(publicPath));

// Rotas
app.get('/', (req, res) => res.sendFile(path.join(viewsPath, 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(viewsPath, 'login.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(viewsPath, 'dashboard.html')));
app.get('/form-email', (req, res) => res.sendFile(path.join(viewsPath, 'form-email.html')));

app.post('/form-email', (req, res) => {
  console.log('📨 Dados recebidos:', req.body);
  res.send('Formulário enviado com sucesso!');
});

// Exporta o app como função para serverless na Vercel
module.exports = (req, res) => app(req, res);
