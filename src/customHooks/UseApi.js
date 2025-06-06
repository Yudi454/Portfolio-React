import axios from "axios";

export const getDatos = async () => {
  const res = await axios.get("http://localhost:3000/datos");
  localStorage.setItem("datos", JSON.stringify(res.data));
};
