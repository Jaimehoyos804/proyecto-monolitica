const { Router } = require('express')
const {
    createCliente,
    getCliente,
    editClienteById
} =
    require('../controllers/Cliente')

const router = Router()

// crear
router.post('/', createCliente)

// consultar todos
router.get('/', getCliente)
//editar
router.put('/:id', editClienteById)

module.exports = router;