const express = require('express');
const app = express();
const port = 3000;

//criar rota padrão
app.get('/', (req, rest) => {
    rest.send('Hello World!');
})

//escutar porta
app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`);
})