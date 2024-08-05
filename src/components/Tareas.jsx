import React from 'react'
import { Tarea } from './Tarea'
import {useSelector} from "react-redux"


export const Tareas = () => {
  const tareas = useSelector((state) => state.tareasSlice.tareas);
  
  return (
    <div>
    {tareas.length > 0 ? (
      tareas.map(t => <Tarea key={t.id} {...t}/>)
    ) : (
      <p>Empieza agregando tu primera tarea!</p>
    )}
  </div>
  )
}