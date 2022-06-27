import {Task} from '../models/task-model.js';

export function task(app, bd){
    app.get('/task', function (req, res) { //rota e callback de ativação
      res.send(bd.tasks);
      //res.send('Rota ativada com GET e recurso task, valores de task devem ser retornados');
      })
    app.post('/task', function (req, res) { 
      const body = req.body;
      const taskTest = new Task(body.title, body.description, body.status, body.date);
      bd.users.push(taskTest);
        //res.send('Rota POST de task ativada: usuário adicionado ao banco de dados');
      })
}