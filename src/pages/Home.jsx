import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Main } from "../components/Main"

export const Home = () => {

    const datos = {
        nombre: "Lucas",
        apellido: "Yudi",
        edad: 0,
        descripción: "",
        imagen: "",
        mascotas: [],
        lenguajes: [],
        redes: {}
    }

    return (
        <>
        <Header nombre={datos.nombre} apellido={datos.apellido}/>
        <Main/>
        <Footer/>
        </>
    )
}