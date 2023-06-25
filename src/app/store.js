import { configureStore } from '@reduxjs/toolkit'
import gamesArrayReducer from './gameArraySlice'

export default configureStore({
    reducer : {
        gamesArray : gamesArrayReducer
    }
})