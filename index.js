import express from 'express';// importando módulo
import chalk from 'chalk';

const app = express(); //criando instancia do módulo
//padrão rest usa protocolo http e verbos 
app.get('/', function (req, res) { //rota e callback de ativação
  res.send('Hello World')
})

app.listen(3000, ()=>{
    console.log(chalk.cyan('Servidor rodando na porta 3000'));
})