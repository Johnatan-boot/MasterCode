const express = require('express');
const path = require('path');

const app = express();

// Caminhos base ajustados para sua estrutura
const rootPath = path.resolve(__dirname, '../../../src/views');
const publicPath = path.join(rootPath, 'public');
const scriptsPath = path.join(rootPath, 'scripts');
const componentsPath = path.join(rootPath, 'components');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir arquivos estáticos
app.use(express.static(publicPath));
app.use('/scripts', express.static(scriptsPath));
app.use('/components', express.static(componentsPath));

// Rotas
app.get('/', (req, res) => res.sendFile(path.join(rootPath, 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(rootPath, 'login.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(rootPath, 'dashboard.html')));
app.get('/servicos', (req, res) => res.sendFile(path.join(rootPath, 'servicos.html')));
app.get('/home', (req, res) => res.sendFile(path.join(rootPath, 'home.html')));
app.get('/form-email', (req, res) => res.sendFile(path.join(rootPath, 'form-email.html')));

app.post('/form-email', (req, res) => {
console.log('📨 Dados recebidos:', req.body);
res.send('Formulário enviado com sucesso!');
});

module.exports = (req, res) => app(req, res);