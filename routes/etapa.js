const { Router } = require('express')
const {
  createEtapa,
  getEtapa,
  editEtapaById
} =
    require('../controllers/etapa')

const router = Router()

// crear
router.post('/', createEtapa)

// consultar todos
router.get('/', getEtapa)

router.put('/:id', editEtapaById)

module.exports = router;