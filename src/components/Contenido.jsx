import React, { useEffect } from 'react'
import { Agregar } from './Agregar'
import { Tareas } from './Tareas'
import { useDispatch } from 'react-redux'
import { agregarIniciales } from '../redux/features/tareasSlice'
import { getTareas } from '../services'


export const Contenido = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchTareas = async () => {
            const tareas = await getTareas();
            dispatch(agregarIniciales(tareas));
        };

        fetchTareas();  
    }, [])
    
    return (
        <main className='contenido'>
            <Agregar />
            <Tareas  />
        </main>
    )
}