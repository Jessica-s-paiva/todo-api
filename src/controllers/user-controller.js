import {UserModel} from '../models/UserModel.js';

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
    app.get("/user/:email", (req, res) => {
      const param = req.params.email;
      const userParam = bd.users;
      res.send(userParam.filter((element)=>element.email == param ))
  })

  app.delete("/user/:email", (req, res) => {
      const param = req.params.email;
      const users = bd.users;
      const userParam = users.filter((element)=>element.email == param );
      users.splice(users.indexOf(userParam), 1)

      res.send(`{"mensagem" : "${param} deletado"}`)
  })

  app.put("/user/:email", (req, res) => {
      const param = req.params.email;
      const body = req.body;
      for(let i = 0; i <= bd.users.length; i++ ){
          if(bd.users[i].email == param ){
              const DadoAntigo = bd.users[i];
              const DadoNovo = new UserModel(
              body.name || DadoAntigo.name,
              body.email|| DadoAntigo.email,
              body.password|| DadoAntigo.password
              )
              bd.users.splice(i,1,DadoNovo)
              res.json({"Dado Alterado": DadoNovo, "Dados Antigos:": DadoAntigo})    
          }
      }
      
      // res.send(`{"mensagem" : "${param} atualizado"}`)
  })
}