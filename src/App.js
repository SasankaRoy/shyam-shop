import "./App.css";

// component's imports.....
import { Navbar } from "./component/Navbar";
import { Hero } from "./component/Hero";
import { CatagoryList } from "./component/CatagoryList";
import { ProductList } from "./component/ProductList";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CatagoryList />
      <ProductList />
    </>
  );
}

export default App;
