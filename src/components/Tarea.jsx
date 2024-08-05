import React from 'react'
import { useDispatch } from "react-redux"
import { cambiarCheck } from '../redux/features/tareasSlice';



export const Tarea = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const auxCompleted = e.target.checked;
    const payload = { id: id, completed: auxCompleted }
    dispatch(cambiarCheck(payload));
  }
  return (
      <div className="tarjeta">
          <label className="checkLabel" >
              <input type="checkbox" className="checkbox" checked={completed} onChange={handleChange} />
              {title}
          </label>
      </div>
  )
}
