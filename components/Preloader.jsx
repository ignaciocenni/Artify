"use client";
import { useDispatch } from "react-redux";
import { GET_PROVINCES, GET_CATEGORIES, GET_INFO } from "../store/slice";
import { useRef } from "react";

export default function Preloader({ data }) {
  const { categories, provinces, products } = data;
  const dispatch = useDispatch();
  const loaded = useRef(false);
  if (!loaded.current) {
    dispatch(GET_CATEGORIES(categories));
    dispatch(GET_PROVINCES(provinces));
    dispatch(GET_INFO(products));
    loaded.current = true;
  }
  return null;
}
