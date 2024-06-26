import "./App.css";

// component's imports.....
import { Navbar } from "./component/Navbar";
import { Hero } from "./component/Hero";
import { CatagoryList } from "./component/CatagoryList";
import { ProductList } from "./component/ProductList";
import { Banner } from "./component/Banner";
import { BestDeals } from "./component/BestDeals";
import { FeatureProduct } from "./component/FeatureProduct";
import { BlogList } from "./component/BlogList";
import { Footer } from "./component/Footer";


function App() {
  return (
    <>
      <head>
        <title>Shyam-shop - Home</title>
      </head>
      <Navbar />
      <Hero />
      <CatagoryList />
      <ProductList title='Explore Our Products' />
      <Banner />
      <BestDeals />
      <FeatureProduct />
      <BlogList />
      <Footer />
    </>
  );
}

export default App;
