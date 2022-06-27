import {User} from '../models/user-model.js';

export function user(app, bd){
    app.get('/user', function (req, res) { //rota e callback de ativação
      res.send(bd.users)
        //res.send('Rastreamento da aplicação sendo feito com nodemon');
      })
    app.post('/user', function (req, res) {
      const body = req.body; // acessando o body
      res.send(req.body);
      const userTest = new User(body.name, body.email, body.password);
      bd.users.push(userTest);
        //res.send('Rota POST de user ativada: usuário adicionado ao banco de dados');
      })
}