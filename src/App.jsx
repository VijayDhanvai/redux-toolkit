import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./Components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <TopNav />
      <Container fluid="md">
        <div className="row mt-4 ">
          <Routes>
            <Route index path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
