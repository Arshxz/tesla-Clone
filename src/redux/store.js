import { configureStore } from '@reduxjs/toolkit'
import carReducer from './car/carSlice'

export const store = configureStore({
    reducer: {
        car: carReducer
    }
})