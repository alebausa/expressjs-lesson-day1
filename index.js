const express = require('express');

// Express server handling requests & responses
const app = express();

// Defino que mi carpeta de contenido estático es public
app.use(express.static('public'));

// Middlware random 1
app.use((req, res, next) => {
  console.log('Paso la pelota al siguiente middleware');
  next();
})

// Middlware random 2 
app.use((req, res, next) => {
  console.log('Y yo la recibo ⚽️');
  // Sigue pasando la pelota hasta que coincida una ruta
  next();
})

// Rutas que mandan archivo
app.get('/', (request, res, next) => {
  res.sendFile(__dirname + '/views/home.html')
})

app.get('/dogs', (request, res, next) => {
  res.sendFile(__dirname + '/views/dogs.html')
})

// Rutas que mandan HTML
app.get('/about', (request, res, next) => {
  const name = 'Ale';
  res.send(`<h1>About me: I'm ${name}</h1><a href="/home">Home</a>`);
})

// Rutas que mandan JSON
app.get('/api', (request, response) => {
  console.log('Request type:', request.method);
  const student = {
    name: 'John Doe',
    age: 23
  }
  response.json(student);
})

// Server started
app.listen(3000, () => { console.log('Connected on port 3000!')})