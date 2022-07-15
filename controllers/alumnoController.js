const req = require('express/lib/request')
const Alumno = require('../model/Alumno')


//monstrar
module.exports.mostrar =(req, res)=>{
    Alumno.find({}, (error, alumnos)=>{
        if(error){
            return res.status(500).json({
                message: 'Error mostrando los alumnos'
            })
        }
        return res.render('index', {alumnos: alumnos})
    })
}
//crear
module.exports.crear = (req, res) =>{
//console.log(req.body)
const alumno = new Alumno({
    rut: req.params.rut,
    nombre: req.params.nombre,
    fechadenac: req.params.fechadenac,
    curso:   req.params.curso,
    jornada: req.params.jornada
})
alumno.save(function(error,alumno){
    if(error){
        return res.status(500).json({
            message: 'Error al crear el Alumno'
        })
    }
    res.redirect('/')
})
}

//editar
module.exports.editar = (req,res)=>{
    const id         =   req.params.id_editar
    const rut        =   req.params.rut_editar
    const nombre     =   req.params.nombre_editar
    const fechadenac =   req.params.fechadenac_editar
    const curso      =   req.params.curso_editar
    const jornada    =   req.params.jornada_editar
    Alumno.findByIdAndUpdate(id, {rut, nombre, fechadenac, curso, jornada}, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al actualizar el Alumno'
            })
        }
        res.redirect('/')
    })
}

//borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Alumno.findByIdAndRemove(id, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar Alumno'
            })
        }
        res.redirect('/')
    })
}


//mostrar cursos

