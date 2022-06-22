export function user(app){
    app.get('/user', function (req, res) { //rota e callback de ativação
        res.send('Rota ativada com GET e recurso user, valores de user devem ser retornados');
      })
}