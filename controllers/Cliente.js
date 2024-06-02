const Cliente = require('../models/cliente')
const { request, response} = require('express')

// crear
const createCliente = async (req = request, 
    res = response) => {
        try {
            console.log(req.body)

            const data = req.body

            const cliente = new Cliente(data)

            await cliente.save()
            
            return res.status(201).json(cliente)

        } catch(e) {
            return res.status(500).json({
                msj: e
            })
        }
}

const getCliente = async (req = request, 
    res = response) => {
        try {

            const clientes = await Cliente.find()

            return res.json(clientes)

        } catch(e) {
            return res.status(500).json({
                msj: e
            })
        }
}

const editClienteById = async (req = request,
    res = response) => {
        try {
            const id = req.params.id
            const { nombre,email } = req.body
            const data = { nombre,email}
            data.fechaActualizacion = new Date()
            const clientes  = await Cliente.findByIdAndUpdate(id, data, {new: true})
            return res.status(201).json(clientes)
        } catch(e) {
            return res.status(500).json({
                msj: e
            })
        }
}

module.exports = { 
    createCliente, 
    getCliente,
    editClienteById
}