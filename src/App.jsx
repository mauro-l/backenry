import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//import ItemListContainer from "./components/ItemListContainer";
import ProductList from "./pages/admin/ProductList";
import ItemListContainer from "./pages/shop/Products/ItemListContainer";
import Home from "./pages/shop/Home/Home";
import Navbar from "./components/Layout/NavBar/Navbar";
import NavbarSticky from "./components/Layout/NavBar/NavbarSticky";
import Footer from "./components/Layout/Footer/Footer";
import Carousel from "./components/Layout/Carousel/Carousel";
import ProductImage from "./pages/shop/Products/ProductsDetail/ProductImage/ProductImage";
import { Create, Update } from "./pages/admin/CreateEdit";

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
          <Route path="/products/:pid" element={<ProductImage />} />
          <Route path="/admin/create" element={<Create />} />
          <Route path="/admin/update" element={<Update />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
