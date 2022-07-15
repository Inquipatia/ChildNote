
//
const modalAlumno = new bootstrap.Modal(document.getElementById('modalAlumno'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value =     fila.children[0].innerHTML
    rut_editar.value =     fila.children[1].innerHTML
    nombre_editar.value = fila.children[2].innerHTML
    fechadenac_editar.value =   fila.children[3].innerHTML
    curso_editar.value =   fila.children[4].innerHTML
    jornada_editar.value =   fila.children[5].innerHTML
    modalAlumno.show()
})