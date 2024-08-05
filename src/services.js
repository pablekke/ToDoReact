const URL_TAREAS = "https://jsonplaceholder.typicode.com/todos/";

export const getTareas = async () => {
  const tareas = await fetch(URL_TAREAS)
    .then((r) => r.json())
    .then((json) => json);
  return tareas;
};