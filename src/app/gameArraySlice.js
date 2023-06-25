import { createSlice } from '@reduxjs/toolkit'
import { getGenres } from '../functions'

export const gamesArraySlice = createSlice({
    name: 'gamesArray',
    initialState: {
      currentArray: [],
      originalArray: [],
      genres: [],
      page: 1
    },
    reducers: {
      setArray: (state, action) => {
        state.currentArray = action.payload
      },
      setOriginalArray: (state, action) => {
        state.originalArray = action.payload
      },
      setGenres: (state, action) => {
        const genres = getGenres(action.payload)
        state.genres = genres
        console.log(genres)
      },
      setPage: (state, action) => {
        state.page = action.payload
      }
    }
  })
  
  export const { setArray,
                 setOriginalArray,
                 setGenres,
                 setPage } = gamesArraySlice.actions
  
  export default gamesArraySlice.reducer