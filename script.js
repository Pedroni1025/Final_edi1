const preguntas = document.querySelectorAll(".pregunta");
preguntas.forEach(pregunta =>{
    pregunta.addEventListener('click', () => {
        const pregunta_encabezado = pregunta.querySelector(".pregunta_encabezado");
        if (pregunta_encabezado.nextElementSibling.classList.contains("activo")) {
            pregunta_encabezado.nextElementSibling.classList.remove("activo");
        } else {
            removerClaseActivo();
            pregunta_encabezado.nextElementSibling.classList.add("activo");
        }
    })
});

function removerClaseActivo(){
    preguntas.forEach((pregunta)=>{
        const pregunta_encabezado = pregunta.querySelector(".pregunta_encabezado");
        pregunta_encabezado.nextElementSibling.classList.remove("activo");

        if (pregunta_encabezado.nextElementSibling.classList.contains("activo")) {
            pregunta_encabezado.nextElementSibling.classList.remove("activo");
        }
    });
}
