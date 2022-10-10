const express =require('express')
const morgan = require('morgan')
const pkg = require('../package.json')
//const json = require('body-parser')
 
const app = express()
app.set('pkg', pkg)

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
        nombre_del_proyecto: app.get('pkg').name,
    })
})

app.use('/products',require('./routes/products.routes'))

app.use('/auth', require('./routes/auth.routes'))



module.exports = app;