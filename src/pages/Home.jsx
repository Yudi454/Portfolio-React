import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Main } from "../components/Main"

export const Home = () => {

    const datos = {
        nombre: "Lucas",
        apellido: "Yudi",
        edad: 21,
        imagen: "",
        lenguajesYTecnologias: [
            {
            nombre:"JavaScript",
             icono: "devicon-javascript-plain colored"
            },
            {
                nombre: "Java",
                icono: "devicon-java-plain colored"
            },
            {
                nombre: "C#",
                icono: "devicon-csharp-plain colored"             
            },
            {
                nombre: "React",
                icono: "devicon-react-original colored"
            },
            {
                nombre: "HTML",
                icono: "devicon-html5-plain colored"
            },
            {
                nombre: "CSS",
                icono: "devicon-css3-plain colored"
            },
            {
                nombre: "Mongo",
                icono: "devicon-mongodb-plain colored"
            },
            {
                nombre: "Node",
                icono: "devicon-nodejs-plain-wordmark colored"
            },
            {
                nombre: "Express",
                icono: "devicon-express-original colored"
            }],
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