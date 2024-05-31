import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/admin/ProductList";
import { ItemListContainer } from "./pages/shop/Products";
import { Home } from "./pages/shop/Home";
import { Navbar, Footer, NavbarSticky } from "./components/layout";
import ProductImage from "./pages/shop/Products/ProductsDetail/ProductImage/ProductImage";
import { Create, Update } from "./pages/admin/CreateEdit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <NavbarSticky />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/products/:category" element={<ItemListContainer />} />
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/products/:pid" element={<ProductImage />} />
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
