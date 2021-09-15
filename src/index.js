/* llamar a express: */
const express = require('express');
/* crear aplicacion de express: */
const app = express();
/* puerto: */
const port = 3000;

/* ruta principal: */
app.use('/', (req, res) => {
  res.send('<h1>Hola desde nodejs</h1>');
});

/* servidor escucha: */
app.listen(port, () => {
  console.log(`Servidor escuchando por el puerto ${3000}`);
});
