"use client";
import { useDispatch, useSelector } from "react-redux";
import { GET_PROVINCES, GET_CATEGORIES, GET_INFO, multiplied, totalPrices } from "../store/slice";
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
  let products = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("products") || []) : [];

  const totalPrice = products.map((product) => {
    return product.quantity * product.unit_price;
  });
  const quantityProducts = products.map((product) => {
    return product.quantity;
  });
  dispatch(multiplied(quantityProducts));
  dispatch(totalPrices(totalPrice));

  return null;
}
