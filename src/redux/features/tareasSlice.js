import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tareas: [],
};

const tareasSlice = createSlice({
  name: "tareasSlice",
  initialState,
  reducers: {
    agregarIniciales:(state, action) => {
      const iniciales = action.payload;
      state.tareas = iniciales;

    },
    agregar: (state, action) => {
      const tareas = state.tareas;
      const id = tareas.length + 1;
      const titulo = action.payload;
      const tarea = {
        id: id,
        title: titulo,
        completed: false,
      };
      const copia = [...tareas, tarea];
      state.tareas = copia;
    },
    cambiarCheck: (state, action) => {
      const tareas = state.tareas;
      // const id = action.payload.id;
      // const completed = action.payload.completed;
      const {id, completed} = action.payload;
      const tarea = tareas.find((t) => t.id === id);
      tarea.completed = completed;
      state.tareas = [...tareas];
    },
  },
});

export const { agregar, cambiarCheck, agregarIniciales } = tareasSlice.actions;
export default tareasSlice.reducer;
