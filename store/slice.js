import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name:'valores',
    initialState:{
        nombre:'hernan',
    },
    reducers:{
        rename: (state, action) =>{
            state.nombre= action.payload;
        }
    }
})

export const {rename} = Slice.actions