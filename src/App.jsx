import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import { Container } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Header from "./components/react-bootstrap-components/Header-bs";
import Footer from "./components/react-bootstrap-components/Footer-bs";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
