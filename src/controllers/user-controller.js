export function user(app){
    app.get('/user', function (req, res) { //rota e callback de ativação
        res.send('Rastreamento da aplicação sendo feito com nodemon');
      })
    app.post('/user', function (req, res) {
      const body = req.body; // acessando o body
      res.send(req.body);
        //res.send('Rota POST de user ativada: usuário adicionado ao banco de dados');
      })
}