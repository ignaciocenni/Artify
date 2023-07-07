import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name: 'valores',
    initialState: {
        nombre: [],
        
    },

    reducers: {
        GET_INFO: (state, action) => {
            state.nombre = [action.payload];
        },
        
}})

export const { GET_INFO} = Slice.actions