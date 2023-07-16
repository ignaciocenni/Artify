"use client";
import { useDispatch, useSelector } from "react-redux";
import { GET_PROVINCES, GET_CATEGORIES, GET_INFO, multiplied, totalPrices, localProducts } from "../store/slice";
import { useRef } from "react";

export default function Preloader({ data }) {
  const { categories, provinces, AllProducts } = data;
  const dispatch = useDispatch();
  const loaded = useRef(false);

  if (!loaded.current) {
    dispatch(GET_CATEGORIES(categories));
    dispatch(GET_PROVINCES(provinces));
    dispatch(GET_INFO(AllProducts));
    loaded.current = true;
  }

  let products = [];
  if (typeof window !== "undefined") {
    products = JSON.parse(localStorage.getItem("products")) || [];
  }
  dispatch(localProducts(products));
  return null;
}
