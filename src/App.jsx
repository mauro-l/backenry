import "./App.css";
import Carousel from "./components/Carousel";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import NavbarSticky from "./components/NavbarSticky";

function App() {
  return (
    <>
      <Navbar />
      <NavbarSticky />
      <Carousel />
      <ItemListContainer />
    </>
  );
}

export default App;
