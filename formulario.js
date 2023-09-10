let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = e.target.children;
    
    if (!inputs[3].value.includes("@")) {
      inputs[3].value = "";
      Swal.fire({
        icon: 'error',
        title: 'Por favor ingrese una dirrección de correo válido.',
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!, a la brevedad nos pondremos en contacto.',
        showConfirmButton: false,
        timer: 3000
      })
    }
});











