const express = require('express')
const morgan = require('morgan')
const pkg = require('../package.json')
const createRoles = require('../src/libs/initCongif')

const app = express();
createRoles();
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

app.use('/products', require('./routes/products.routes'));

app.use('/auth', require('./routes/auth.routes'));

app.use('/users', require('./routes/user.routes'));



module.exports = app;