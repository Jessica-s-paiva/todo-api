import express from 'express';// importando módulo
import chalk from 'chalk';
import {user} from './controllers/user-controller.js';
import {task} from './controllers/task-controller.js';
import {UserModel} from './models/UserModel.js';
import {TaskModel} from './models/TaskModel.js';
import {bd} from './infra/bd.js';
//import {bdSqlite} from './infra/sqlite-db.js';

const app = express(); //criando instancia do módulo
//padrão rest usa protocolo http e verbos 
//const sqlite = new sqlite.Database('sqlite');

app.use(express.json());

user(app, bd);
task(app, bd);

const tarefa = new TaskModel("teste", "teste de descrição", "em andamento", "22/06/2022");
const usuario = new UserModel("Maria Joana", "teste@teste.com", "12345");

app.listen(3033, ()=>{
    console.log(tarefa);
    console.log(usuario);
    console.log(chalk.green('Servidor rodando na porta 3033'));
})