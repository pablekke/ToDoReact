import { configureStore } from '@reduxjs/toolkit'
import tareasSlice from './features/tareasSlice'


export const store = configureStore({
    reducer:{
        tareasSlice
    }
})