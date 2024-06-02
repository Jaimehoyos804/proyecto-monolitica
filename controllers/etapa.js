const Etapas = require('../models/etapa')
const { request, response} = require('express')

// crear
const createEtapa = async (req = request, 
    res = response) => {
        try {
            console.log(req.body)

            const data = req.body

            const etapas = new Etapas(data)

            await etapas.save()
            
            return res.status(201).json(etapas)

        } catch(e) {
            return res.status(500).json({
                msj: e
            })
        }
}

const getEtapa = async (req = request, 
    res = response) => {
        try {

            const etapas = await Etapas.find()

            return res.json(etapas)

        } catch(e) {
            return res.status(500).json({
                msj: e
            })
        }
}

const editEtapaById = async (req = request,
    res = response) => {
        try {
            const id = req.params.id
            const { nombre} = req.body
            const data = { nombre}
            data.fechaActualizacion = new Date()
            const etapas  = await Etapas.findByIdAndUpdate(id, data, {new: true})
            return res.status(201).json(etapas)
        } catch(e) {
            return res.status(500).json({
                msj: e
            })
        }
}

module.exports = { 
    createEtapa, 
    getEtapa,
    editEtapaById
}