const mongoose = require('mongoose')
const Schema = mongoose.Schema
const alumnoSchema = new Schema ({
    rut: String,
    nombre: String,
    fechadenac: String,
    curso: [
        
    ],
    jornada: String
},{versionKey:false})

module.exports = mongoose.model('alumnos', alumnoSchema)
