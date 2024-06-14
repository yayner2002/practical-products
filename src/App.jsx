import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Products from "./screens/AddProductsPage.jsx";
import Login from "./screens/Login";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main
          style={{
            width: "80%",
            margin: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-products" element={<Products />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
export default App;
