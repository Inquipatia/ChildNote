const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CursoSchema = new Schema ({
    _id: { type: String, required: true, unique: true},
    nombre: { type: String, required: true, unique: false}
},{versionKey:false})

module.exports = mongoose.model('curso', CursoSchema)