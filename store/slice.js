import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "valores",
  initialState: {
    nombre: [],
    copyProducts: [],
    provinces: [],
  },

  reducers: {
    GET_INFO: (state, action) => {
      state.nombre = action.payload;
      state.copyProducts = action.payload;
    },
    GET_PROVINCES: (state, action) => {
      state.provinces = action.payload;
    },

    price: (state, { type, payload }) => {
      const price = [...state.nombre];
      const find = price.filter(function (num) {
        return num.price >= payload[0] && num.price <= payload[1];
      });
      state.nombre = find;
    },

    countrie: (state, action) => {
      console.log(action.payload);
      const countrie = [...state.nombre];
      console.log("Provincias Redux:", countrie);
      const find = countrie.filter(
        (element) => element.user.province.name === action.payload
      );
      console.log(find);
      state.nombre = find;
    },

    category: (state, action) => {
      const categoria = [...state.products[0]];
      const [find] = categoria.filter(
        (element) => element.categoryId === action.payload.map((city) => city)
      );
      state.nombre = [find];
    },
    search: (state, { type, payload }) => {
      state.nombre = payload;
    },
  },
});

export const { GET_INFO, countrie, price, category, search } = Slice.actions;
