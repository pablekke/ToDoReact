import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { agregar } from '../redux/features/tareasSlice';

export const Agregar = () => {
    
    const dispatch = useDispatch();
    const titulo = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (titulo.current.value.trim()) {
            dispatch(agregar(titulo.current.value));
            titulo.current.value = '';
        }
    }
    return (
        <form className='agregar' onSubmit={handleSubmit}>
            <label htmlFor='tarea'>Tarea: </label>
            <input type="text" name="tarea" placeholder='¿Qué tenés para hacer hoy?' ref={titulo} />
            <input type="submit" value="Agregar" />
        </form>
    )
}
