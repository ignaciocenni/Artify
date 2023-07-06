import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const Slice = createSlice({
    name: 'valores',
    initialState: {
        nombre: [],
        
    },

    reducers: {
        GET_INFO: (state, action) => {
            state.nombre = [action.payload];
        },
        POST_INFO: async (state, action) => {
            try {
               await axios.post('http://localhost:3000/api/users', action.payload);
            } catch (error) {
              console.log(error);
            }
        }
}})

export const { GET_INFO } = Slice.actions