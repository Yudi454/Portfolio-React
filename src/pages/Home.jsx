import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Main } from "../components/Main"

export const Home = () => {

    const datos = {
        nombre: "Lucas",
        apellido: "Yudi",
        edad: 21,
        imagen: "",
        lenguajesYTecnologias: ["JavaScript","Java","C#","React","Html","Css","Mongo","Node","Express"],
        redes: {}
    }

    return (
        <>
        <Header nombre={datos.nombre} apellido={datos.apellido}/>
        <Main datos={datos} />
        <Footer/>
        </>
    )
}