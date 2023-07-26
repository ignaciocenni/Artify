"use client";
import { useDispatch } from "react-redux";
import { GET_PROVINCES, GET_CATEGORIES, GET_INFO, getUsers, localProducts } from "../store/slice";
import { useRef } from "react";
import { useGetCategoriesQuery, useGetProductsQuery, useGetProvincesQuery, useGetUsersQuery } from "../store/artifyApi";

export default function Preloader() {
  const dispatch = useDispatch();
  const loaded = useRef(false);

  const { data: products, isLoading } = useGetProductsQuery();
  let provinces = useGetProvincesQuery();

  let categories = useGetCategoriesQuery();

  let users = useGetUsersQuery();

  if (!isLoading && !provinces.isLoading && !categories.isLoading && !users.isLoading) {
    if (!loaded.current && !isLoading) {
      dispatch(GET_CATEGORIES(categories.data));
      dispatch(GET_PROVINCES(provinces.data));
      dispatch(GET_INFO(products));
      dispatch(getUsers(users.data));
      loaded.current = true;
    }
  }

  let Localproducts = [];
  if (typeof window !== "undefined") {
    Localproducts = JSON.parse(localStorage.getItem("products")) || [];
  }
  dispatch(localProducts(Localproducts));
  return null;
}
