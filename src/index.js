import express from 'express';// importando módulo
import chalk from 'chalk';
import {user} from './controllers/user-controller.js';
import {task} from './controllers/task-controller.js';

const app = express(); //criando instancia do módulo
//padrão rest usa protocolo http e verbos 

user(app);
task(app);
app.listen(3000, ()=>{
    console.log(chalk.green('Servidor rodando na porta 3000'));
})