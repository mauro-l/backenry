import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//import ItemListContainer from "./components/ItemListContainer";
import ProductList from "./pages/admin/ProductList";
import ItemListContainer from "./pages/shop/Products/ItemListContainer";
import Home from "./pages/shop/Home/Home";
import Navbar from "./components/Layout/NavBar/Navbar";
import NavbarSticky from "./components/Layout/NavBar/NavbarSticky";
import Footer from "./components/Layout/Footer/Footer";
//import ItemDetail from "./pages/shop/Products/Detail/ItemDetail";
import Carousel from "./components/Layout/Carousel/Carousel";
import ProductImage from "./pages/shop/Products/ProductsDetail/ProductImage/ProductImage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <NavbarSticky />
        <Carousel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/admin/products" element={<ProductList />} />
          {/* <Route path="/detail" element={<ItemDetail />} /> */}
          <Route path="/products/:pid" element={<ProductImage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
