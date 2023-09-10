const mostrarUsuarios = async () => {
  try {
    const response = await fetch("./db/usuarios.json");
    const info = await response.json();
    console.log(info);

  } catch (error) {
    console.log(error);
  }
};

mostrarUsuarios();

