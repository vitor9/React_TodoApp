const server = require('./config/server')
require('./config/database')
// Passando o server e invocando o metodo
// Funcao exportada pelo module.export de routes.js
require('./config/routes')(server)