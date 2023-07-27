import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "valores",
  initialState: {
    activeProducts: [],
    dashProducts: [],
    productStatus: "",
    userRol: "",
    dashUsers: [],
    users: [],
    copyProducts: [],
    products: [],
    provinces: [],
    categories: [],
    cartQuantity: 0,
    totalPrice: 0,

    searched: [],
    provincesFilter: "Todas",
    categoriesFilter: "Todas",
    range: [],
  },

  reducers: {
    GET_INFO: (state, action) => {
      state.products = action.payload;
      state.dashProducts = action.payload;
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

    setDashProducts: (state, { type, payload }) => {
      state.dashProducts = payload[0];
      state.productStatus = payload[1];
    },
    setDashUsers: (state, { type, payload }) => {
      state.dashUsers = payload[0];
      state.userRol = payload[1];
    },

    price: (state, { type, payload }) => {
      let products = state.searched.length !== 0 ? state.searched : [...state.copyProducts];
      if (payload !== "reset") {
        products = products.filter((product) => product.price >= payload[0] && product.price <= payload[1]);
        state.activeProducts = products;
      }

      if (state.categoriesFilter !== "Todas") {
        products = products.filter((product) => product.category.name === state.categoriesFilter);
      }

      if (state.provincesFilter !== "Todas") {
        products = products.filter((product) => product.province.name === state.provincesFilter);
      }
      state.activeProducts = products;
    },

    countrie: (state, { type, payload }) => {
      const products = state.searched.length !== 0 ? [...state.searched] : [...state.copyProducts];
      const currentCategorie = state.categoriesFilter;
      state.provincesFilter = payload;
      let filtered = [];
      if (payload === "Todas") {
        if (currentCategorie === "Todas") {
          filtered = [...products];
        } else {
          filtered = products.filter((product) => product.category.name === currentCategorie);
        }
      } else {
        if (currentCategorie === "Todas") {
          filtered = products.filter((product) => product.province.name === payload);
        } else {
          filtered = products.filter((product) => product.category.name === currentCategorie && product.province.name === payload);
        }
      }
      state.activeProducts = filtered;
    },

    category: (state, { type, payload }) => {
      const products = state.searched.length !== 0 ? [...state.searched] : [...state.copyProducts];
      const currentProvince = state.provincesFilter;
      state.categoriesFilter = payload;
      let filtered = [];
      if (payload === "Todas") {
        if (currentProvince === "Todas") {
          filtered = [...products];
        } else {
          filtered = products.filter((product) => product.province.name === currentProvince);
        }
      } else {
        if (currentProvince === "Todas") {
          filtered = products.filter((product) => product.category.name === payload);
        } else {
          filtered = products.filter((product) => product.province.name === currentProvince && product.category.name === payload);
        }
      }
      state.activeProducts = filtered;
    },

    search: (state, { type, payload }) => {
      let products = [...state.copyProducts];

      if (state.categoriesFilter !== "Todas") {
        products = products.filter((product) => product.category.name === state.categoriesFilter);
      }

      if (state.provincesFilter !== "Todas") {
        products = products.filter((product) => product.province.name === state.provincesFilter);
      }
      products = products.filter((product) => product.name.toLowerCase().includes(payload.toLowerCase()));

      state.searched = payload === "" ? "" : products;
      state.activeProducts = products;
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
