import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name: 'valores',
    initialState: {
        nombre: [],
        copyProducts: []

    },

    reducers: {
        GET_INFO: (state, action) => {
            state.nombre = [action.payload];
            state.copyProducts = [action.payload];
        },
        price: (state, { type, payload }) => {
            const price = [...state.nombre[0]]
            const find = price.filter(function (num) {
                return num.price >= payload[0] && num.price <= payload[1];
            });
            state.nombre = [find]
        },
        countrie: (state, action) => {
            const countrie = [...state.nombre[0]]
            const find = countrie.filter(element => element.countrie === action.payload)
            state.nombre = [find]
            console.log(countrie, "reducer");

        },
        category: (state, action) => {
            const categoria = [...state.products[0]]
            const [find] = categoria.filter(element => element.categoryId === action.payload.map(city => city))
            state.nombre = [find]
            console.log(categoria, "reducer");
        },
    },
})

export const { GET_INFO, countrie, price, category } = Slice.actions