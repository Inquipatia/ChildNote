const express = require('express')
const router = express.Router()

const alumnoController = require('../controllers/alumnoController')

//mostrar todos los alumnos (GET)
router.get('/', alumnoController.mostrar)
//Crear alumno (POST)
router.post('/crear', alumnoController.crear)
//editar alumno(POST)
router.post('/editar', alumnoController.editar)
//borar alumno(GET)
router.delete('/borrar/:id', alumnoController.borrar)
module.exports = router