const taskValidator = (data, isPartial = false) => {
  const errores = [];

  if (!isPartial || "title" in data) {
    if (data.title?.trim() === "") {
      errores.push("🚫 El titulo no puede estar vacío 🚫");
    } else if (data.title?.length > 100) {
      errores.push("🚫 El titulo no puede superar los 100 caracteres 🚫");
    }
  }

  if (!isPartial || "description" in data) {
    if (data.description?.trim() === "") {
      errores.push("🚫 La descripción no puede estar vacío 🚫");
    } else if (data.description?.length > 100) {
      errores.push("🚫 La descripción no puede superar los 100 caracteres 🚫");
    }
  }

  if (!isPartial || "isComplete" in data) {
    if (typeof data.isComplete !== "boolean") {
      errores.push('🚫 La propiedad (isComplete) debe tener un valor booleano ("true" o "false") 🚫');
    }
  }

  return errores;
};

export default taskValidator;