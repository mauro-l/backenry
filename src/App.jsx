import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//import ItemListContainer from "./components/ItemListContainer";
import ProductList from "./pages/admin/ProductList";
import ItemListContainer from "./pages/shop/Products/ItemListContainer";
import Home from "./pages/shop/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/admin/products" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
