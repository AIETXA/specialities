
const express = require('express');
const app = express();


const PORT = 3000;
const usersData = [
  { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
  { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
  { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
  { id: 4, name: 'David', age: 25, specialty: 'QAs' },
  { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
  { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
  { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
  { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
  { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
  { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
  { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
  { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
  { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
  { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
  { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
  { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
  { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
  { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
  { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
  { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
  { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
  { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
  { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
  { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
  { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
  { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
  { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
  { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
  { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
  { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];


function especialidadPorUsuario(specialty) {
  return usersData.filter(user => user.specialty.toLowerCase()===specialty.toLowerCase());
}

function generarPagina(title, users) {
const usersList = users.map(user => `<li>${user.name}, ${user.age} años</li>`).join('');

return `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
</head>
<body style="font-family: sans-serif; padding: 2rem;">
 <nav>
      <a href="/">Inicio</a>
      <a href="/marketing">Marketing</a>
      <a href="/developers">Developers</a>
      <a href="/QAs">QAs</a>
      <a href="/ventas">Ventas</a>
  </nav>
<h1>${title}</h1>
      <p>Total de personas: ${users.length}</p>
<ul>${usersList}</ul>
</body>
</html>
`;
}

function generarHomePage() {
  const specialties = ['marketing', 'developers', 'QAs', 'ventas'];
  const links = specialties.map(specialty => `<li><a href="/${specialty}">${specialty}</a></li>`).join('');

  return `
  <!DOCTYPE html>
     <html lang="es">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
      </head>
        <body style="font-family: sans-serif; padding: 2rem;">
          <h1>Bienvenido al Listado de Usuarios</h1>
          <ul>
          ${links}
          </ul>
        </body>
    </html>
  `;
}

app.get('/', (req, res) => {
  res.send(generarHomePage());
});

app.get('/marketing', (req, res) => {
  const users = especialidadPorUsuario('marketing');
  res.send(generarPagina('Marketing', users));
});

app.get('/developers', (req, res) => {
  const users = especialidadPorUsuario('developers');
  res.send(generarPagina('Developers', users));
});

app.get('/QAs', (req, res) => {
  const users = especialidadPorUsuario('QAs');
  res.send(generarPagina('QAs', users));
});

app.get('/ventas', (req, res) => {
  const users = especialidadPorUsuario('ventas');
  res.send(generarPagina('Ventas', users));
});




app.use((req, res) => {
  res.status(404).send('<h1>Pagina no encontrada</h1><a href="/">home</a>');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


