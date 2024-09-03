import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/styles.css";
// import { Container } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        {/* <Container> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* </Container> */}
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
