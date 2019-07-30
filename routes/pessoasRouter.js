const express = require('express')
const pessoasController = require('../controllers/pessoasController')
const router = express.Router()

const model = require('../models/index')

router.get('/', pessoasController.index.bind(null, model.models))

// Rotas para criar registros
router.post('/create', pessoasController.createProcess.bind(null, model.models))
router.get('/create', pessoasController.createForm)

// Rotas para atualizar registros
router.post('/edit/:id', pessoasController.editProcess.bind(null, model.models))
router.get('/edit/:id', pessoasController.editForm.bind(null, model.models))

// Rota para deletar registros
router.get('/delete/:id', pessoasController.deleteOne.bind(null, model.models))

module.exports = router
