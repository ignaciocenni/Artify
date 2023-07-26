import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "valores",
  initialState: {
    activeProducts: [],
    products: [],
    dashProducts: [],
    productStatus: "",
    users: [],
    userRol: "",
    dashUsers: [],
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
      state.dashProducts = action.payload;
      state.provincesFilter = action.payload;
      state.copyProducts = action.payload.filter((product) => product.status === "ACTIVE");
      state.activeProducts = action.payload.filter((product) => product.status === "ACTIVE");
    },
    GET_PROVINCES: (state, action) => {
      state.provinces = action.payload;
    },
    GET_CATEGORIES: (state, action) => {
      state.categories = action.payload;
    },
    getUsers: (state, action) => {
      state.users = action.payload;
      state.dashUsers = action.payload;
    },
    price: (state, { type, payload }) => {
      const price = [...state.activeProducts];
      const find = price.filter(function (num) {
        return num.price >= payload[0] && num.price <= payload[1];
      });
      state.activeProducts = find;
      state.provincesFilter = find;
    },
    setDashProducts: (state, { type, payload }) => {
      state.dashProducts = payload[0];
      state.productStatus = payload[1];
    },
    setDashUsers: (state, { type, payload }) => {
      state.dashUsers = payload[0];
      state.userRol = payload[1];
    },
    countrie: (state, action) => {
      const countrie = [...state.copyProducts];
      const find = countrie.filter((element) => element.province.name === action.payload);

       state.activeProducts = action.payload === "Todas" ? countrie : find;
      state.provincesFilter = action.payload === "Todas" ? countrie : find;
    },
    category: (state, action) => {
      const category = [...state.provincesFilter];
      state.activeProducts =
        action.payload === "allCategories" ? category : category.filter((value) => value.category.name.includes(action.payload));
    },
    search: (state, { type, payload }) => {
      state.activeProducts = payload;
    },
    multiplied: (state, { type, payload }) => {
      state.cartQuantity = payload?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },
    totalPrices: (state, { type, payload }) => {
      state.totalPrice = payload?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },
    //quantity  , multiplied
    localProducts: (state, { type, payload }) => {
      let totalPrice = 0;
      let totalProducts = 0;
      payload.map((product) => {
        totalPrice += product.quantity * product.unit_price;
        totalProducts += product.quantity;
      });
      state.totalPrice = totalPrice.toFixed(2);
      state.cartQuantity = totalProducts;
    },
  },
});

export const {
  GET_INFO,
  GET_CATEGORIES,
  GET_PROVINCES,
  countrie,
  price,
  category,
  search,
  multiplied,
  totalPrices,
  setPath,
  localProducts,
  getUsers,
  setDashProducts,
  setDashUsers,
} = Slice.actions;
