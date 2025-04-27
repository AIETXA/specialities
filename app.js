
const express = require('express');
const app = express();


const PORT = 3000;

app.get('/', (req, res) => {
  res.send(
    '<h1>Página principal</h1><a href="/marketing">marketing</a><br><a href="/developers">developers</a><br><a href="/contact">contact</a>'
  );
});

app.get('/about', (req, res) => {
  res.send('<h1>Hola soy la ABOUT</h1><a href="/">home</a>');
});

app.use((req, res) => {
  res.status(404).send('<h1>Pagina no encontrada</h1><a href="/">home</a>');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
