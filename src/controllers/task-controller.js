export function task(app){
    app.get('/task', function (req, res) { //rota e callback de ativação
        res.send('Rota ativada com GET e recurso task, valores de task devem ser retornados');
      })
    app.post('/task', function (req, res) { 
        res.send('Rota POST de task ativada: usuário adicionado ao banco de dados');
      })
}