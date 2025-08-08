const userValidator = (data, isPartial = false) => {
  const errores = [];

  if (!isPartial || "name" in data) {
    if (data.name?.trim() === "") {
      errores.push("🚫 El nombre no puede estar vacío 🚫");
    } else if (data.name?.length > 100) {
      errores.push("🚫 El nombre no puede superar los 100 caracteres 🚫");
    }
  }

  if (!isPartial || "email" in data) {
    if (data.email?.trim() === "") {
      errores.push("🚫 El email no puede estar vacío 🚫");
    } else if (data.email?.length > 100) {
      errores.push("🚫 El email no puede superar los 100 caracteres 🚫");
    }
  }

  if (!isPartial || "password" in data) {
    if (data.password?.trim() === "") {
      errores.push("🚫 La contraseña no puede estar vacío 🚫");
    } else if (data.password?.length > 100) {
      errores.push("🚫 La contraseña no puede superar los 100 caracteres 🚫");
    }
  }

  return errores;
};

export default userValidator;