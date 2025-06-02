import { Home } from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "devicon/devicon.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ABOUTME, CONTACT, ERROR, HOME, PROJECTS } from "./routes/Rutas";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      {/* <Header nombre={datos.nombre} apellido={datos.apellido} /> */}
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={ABOUTME} />
          <Route path={CONTACT} />
          <Route path={PROJECTS} />
          <Route path={ERROR} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
      {/* <Footer redes={datos.redes} /> */}
    </>
  );
}

export default App;
