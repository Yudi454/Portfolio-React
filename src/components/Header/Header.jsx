import { useLocation } from "react-router-dom";
import { useStore } from "../../store/AuthStore";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import NavBar from "./NavBar";
import "../../css/cambiar_color/ModoOscuro.css";
import "../../css/header/Header.css";
import "../../css/botones/Botones.css";

export const Header = () => {
  const { nombre, apellido } = JSON.parse(localStorage.getItem("datos"));

  const { t, i18n } = useTranslation();

  const location = useLocation();

  const [pagina, setPagina] = useState(location.pathname.substring(1));

  const [menuAbierto,setMenuAbierto] = useState(false)

  const color = useStore((state) => state.color);

  const changeColor = useStore((state) => state.changeColor);

  return (
    <div className={`header${color}`}>
      <NavBar
        nombre={nombre}
        apellido={apellido}
        t={t}
        i18n={i18n}
        pagina={pagina}
        setPagina={setPagina}
        color={color}
        changeColor={changeColor}
        menuAbierto={menuAbierto}
        setMenuAbierto={setMenuAbierto}
      />
    </div>
  );
};
