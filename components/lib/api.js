import axios from "axios";
export const sendContactForm = async (data) =>
  axios.post("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res) throw new Error("Failed to send message");
    return res.json();
  });