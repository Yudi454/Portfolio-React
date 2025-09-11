import axios from "axios";

export const getDatos = async () => {
  const res = await axios.get('/db.json');
  localStorage.setItem("datos", JSON.stringify(res.data));
};
