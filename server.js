//Importa as dependências que acabamos de instalar
const express = require('express');
const path = require('path');

const app = express();

// Inicia a aplicação pela porta configurada
const PORT = process.env.PORT || 8080;

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + '/dist/Crud'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/Crud/index.html'));
});

app.listen(PORT, () =>{
  console.log('Servidor Iniciado na Porta ' + PORT)
})
