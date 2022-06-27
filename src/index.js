import express from 'express';// importando módulo
import chalk from 'chalk';
import {user} from './controllers/user-controller.js';
import {task} from './controllers/task-controller.js';
import {User} from './models/user-model.js';
import {Task} from './models/task-model.js';
import {bd} from './infra/bd.js';

const app = express(); //criando instancia do módulo
//padrão rest usa protocolo http e verbos 

app.use(express.json());

user(app, bd);
task(app, bd);

const tarefa = new Task("teste", "teste de descrição", "em andamento", "22/06/2022");
const usuario = new User("Maria Joana", "teste@teste.com", "12345");

app.listen(3033, ()=>{
    console.log(tarefa);
    console.log(usuario);
    console.log(chalk.green('Servidor rodando na porta 3033'));
})