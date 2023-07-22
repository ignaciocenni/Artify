"use client";
import axios from "axios";
export const sendContactForm = async (data) => {
  const form = data;
  const response = await axios.post("api/contact", form);
  return response;
};
