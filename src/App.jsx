import { Home } from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ABOUTME, CONTACT, ERROR, HOME, PROJECTS } from "./routes/Rutas";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { getDatos } from "./customHooks/UseApi";
import AboutMe from "./pages/About_Me/AboutMe";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Error404 from "./pages/error404/error404";
import "./language/i18n";
import "./css/modoClaro/ModoClaro.css"
import "./css/modoOscuro/ModoOscuro.css"
import "devicon/devicon.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  useEffect(() => {
    getDatos();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={ABOUTME} element={<AboutMe />} />
          <Route path={CONTACT} element={<Contact />} />
          <Route path={PROJECTS} element={<Projects />} />
          <Route path={ERROR} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
