export function task(app){
    app.get('/task', function (req, res) { //rota e callback de ativação
        res.send('Rota ativada com GET e recurso task, valores de task devem ser retornados');
      })
}