const { Router } = require('express')
const {
    createTipoProyecto,
    getTipoProyecto,
    updateTipoEquipoByID } =
    require('../controllers/tipoProyecto')

const router = Router()

// crear
router.post('/', createTipoProyecto)

// consultar todos
router.get('/', getTipoProyecto)

router.put('/:id', updateTipoEquipoByID)

module.exports = router;