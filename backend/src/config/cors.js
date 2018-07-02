module.exports = function(req, res, next) {
    // Add os cabecalhos na resposta p/ o browser dizendo que eh permitido acessar nosso servico
    // Podemos listar no lugar de '*' clientes mais especificos para consumo da API
    res.header('Acess-Control-Allow-Origin' , '*')
    res.header('Acess-Control-Allow-Methods' , 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Control-Allow-Headers' , 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}