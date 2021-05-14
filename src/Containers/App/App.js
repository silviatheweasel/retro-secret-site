import './App.css';
import Home from "../Home/Home";
import { ProductPage } from "../ProductPage";
import { getProductData } from "../../utilities/getProductData";
import { useState, useEffect } from "react";

function App() {
  const categories = [ "Home", "Necklaces", "Bracelets", "Rings", "Earrings"];

  const [isLoading, setIsLoading] = useState(false);

  const [products, setProducts] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getProductData().then(
        (resolvedData) => {
          setProducts(resolvedData);
          setIsLoading(false);
        }
    )
  }, []);

  const [displayedPage, setDisplayedPage] = useState("Home");
  const handleMenuClick = ({target}) => {
    setDisplayedPage(`${target.innerHTML}`);
  }

  const [currentProduct, setCurrentProduct] = useState(null);
  const handleProductClick = ({target}) => {
    const productName = target.id.slice(0, -1);
    const filtededProduct = products.filter(product => product.name === productName)[0];
    setCurrentProduct(filtededProduct);
    setDisplayedPage("ProductPage");
  }

  const attachPage = () => {
    if (displayedPage === "Home") {
      return <Home 
                products={products}
                handleProductClick={handleProductClick} 
                />
    } else if (displayedPage === "ProductPage") {
      return <ProductPage
                currentProduct={currentProduct} 
              />
    }
  }

  return (
    <div className="App">
      <header>
        <h2>RETRO SECRETS</h2>
        <nav>
          <ul>
            {categories.map(
              (category, i) => (
                <li 
                  key={"category" + i}
                  onClick={handleMenuClick}
                  >{category}
                  </li>))}
          </ul>
        </nav>
      </header>
      <main>
        {isLoading && <p>Loading...</p>}
        {products && attachPage()}
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;
