import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
  isLoading: false
}

export const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    getCatsFetch: state => {
      state.isLoading = true
    },
    getCatsSuccess: (state, { payload }) => {
      state.cats = payload
      state.isLoading = false
    },
    getCatsFailure: state => {
      state.isLoading = false
    }
  }
})

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catsSlice.actions
export default catsSlice.reducer