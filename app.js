const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()

const { mongoConn } = require('./databases/configuration')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

mongoConn()

//const proyectos = require('./routes/proyecto')
const tipoProyecto = require('./routes/tipoProyecto')
const Clientes = require('./routes/cliente')
const universidad = require('./routes/universida')
const etapas = require('./routes/etapa')

// middlewares
//app.use('/api/proyectos', proyectos)
app.use('/api/tiposproyectos', tipoProyecto)
app.use('/api/clientes',Clientes)
app.use('/api/universidad',universidad)
app.use('/api/etapas',etapas)


module.exports = app