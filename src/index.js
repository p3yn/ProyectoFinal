const app = require ('../src/app')
const connect = require('./database')

app.listen(process.env.PORT)

console.log('server listen on port', process.env.PORT)