import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "valores",
  initialState: {
    products: [],
    copyProducts: [],
    provinces: [],
    provincesFilter:[]
  },

  reducers: {
    GET_INFO: (state, action) => {
      state.products = action.payload;
      state.copyProducts = action.payload;
      state.provincesFilter = action.payload;
    },
    GET_PROVINCES: (state, action) => {
      state.provinces = action.payload;
    },

    price: (state, { type, payload }) => {
      const price = [...state.products];
      const find = price.filter(function (num) {
        return num.price >= payload[0] && num.price <= payload[1];
      });
      state.products = find;
      state.provincesFilter= find;

    },

    countrie: (state, action) => {
      const countrie = [...state.copyProducts];
      const find = countrie.filter(
        (element) => element.user.province.name === action.payload
      );
      console.log(find);
      state.products = find;
      state.provincesFilter= find;
    },




    category: (state, action) => {
      const categoria = [...state.products];
      const [find] = categoria.filter(
        (element) => element.category.name === action.payload.map((city) => city)
      );
      state.products = [find];
      state.provincesFilter= find;

    },
    search: (state, { type, payload }) => {
      state.products = payload;
    },
  },
});

export const { GET_INFO, countrie, price, category, search } = Slice.actions;
