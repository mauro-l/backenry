import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/admin/ProductList";
//import { ItemListContainer } from "./pages/shop/Products";
import { Home } from "./pages/shop/Home";
import { Navbar, Footer, NavbarSticky } from "./components/Layout";
//import ProductImage from "./pages/shop/Products/ProductsDetail/ProductImage/ProductImage";
import { Create, Update } from "./pages/admin/CreateEdit";
import ProductsPage from "./pages/shop/Products/ProductsPage";
import { Login , Register } from "./pages/auth";
import Contact from "./pages/shop/Contact/Contact.jsx";



//import ProductDeatilPage from "./pages/shop/Products/ProductsDetail/ProductDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <NavbarSticky />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/admin/products" element={<ProductList />} />
          {/* <Route path="/product/:pid" element={<ProductDeatilPage />} /> */}
          <Route path="/admin/create" element={<Create />} />
          <Route path="/admin/update" element={<Update />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
