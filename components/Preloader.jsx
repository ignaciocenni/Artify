"use client";
import { useDispatch } from "react-redux";
import { GET_PROVINCES, GET_CATEGORIES } from "../store/slice";

export default function Preloader({ data }) {
  const { categories, provinces } = data;
  const dispatch = useDispatch();
  dispatch(GET_CATEGORIES(categories));
  dispatch(GET_PROVINCES(provinces));
  return null;
}
