const { Router } = require('express')
const {
   createUniversidad,
   getUniversidad,
   editUniversidadById
} =
    require('../controllers/universidad')

const router = Router()

// crear
router.post('/', createUniversidad)

// consultar todos
router.get('/', getUniversidad)

router.put('/:id', editUniversidadById)

module.exports = router;