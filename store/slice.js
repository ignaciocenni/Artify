import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "valores",
  initialState: {
    products: [],
    copyProducts: [],
    provinces: [],
    provincesFilter: [],
    categories: [],
    cartQuantity: 0,
    totalPrice: 0,
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
    GET_CATEGORIES: (state, action) => {
      state.categories = action.payload;
    },
    price: (state, { type, payload }) => {
      const price = [...state.products];
      const find = price.filter(function (num) {
        return num.price >= payload[0] && num.price <= payload[1];
      });
      state.products = find;
      state.provincesFilter = find;
    },
    countrie: (state, action) => {
      const countrie = [...state.copyProducts];
      const find = countrie.filter((element) => element.user.province.name === action.payload);
      state.products = action.payload === "Todas" ? countrie : find;
      state.provincesFilter = action.payload === "Todas" ? countrie : find;
    },
    category: (state, action) => {
      const category = [...state.provincesFilter];
      state.products =
        action.payload === "allCategories" ? category : category.filter((value) => value.category.name.includes(action.payload));
    },
    search: (state, { type, payload }) => {
      state.products = payload;
    },
    multiplied: (state, { type, payload }) => {
      state.cartQuantity = payload?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },
    totalPrices: (state, { type, payload }) => {
      state.totalPrice = payload?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },
  },
});

export const { GET_INFO, GET_CATEGORIES, GET_PROVINCES, countrie, price, category, search, multiplied, totalPrices, setPath } =
  Slice.actions;
