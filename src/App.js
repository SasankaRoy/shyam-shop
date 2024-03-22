import "./App.css";

// component's imports.....
import { Navbar } from "./component/Navbar";
import { Hero } from "./component/Hero";
import { CatagoryList } from "./component/CatagoryList";
import { ProductList } from "./component/ProductList";
import { Banner } from "./component/Banner";

function App() {
  return (
    <>
      <head>
        <title>Shyam-shop - Home</title>
      </head>
      <Navbar />
      <Hero />
      <CatagoryList />
      <ProductList />
      <Banner />
    </>
  );
}

export default App;
