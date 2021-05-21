import './App.css';
import Home from "../Home/Home";
import { ProductPage } from "../ProductPage";
import { CategoryPage } from "../CategoryPage";
import { getProductData } from "../../utilities/getProductData";
import { useState, useEffect } from "react";

function App() {
  const categories = ["Necklaces", "Bracelets", "Rings", "Earrings"];

  const [isLoading, setIsLoading] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(null);

  const [currentProduct, setCurrentProduct] = useState(null);

  //retrieves data and saves product data in the state
  const [products, setProducts] = useState(null);

  const [displayedPage, setDisplayedPage] = useState("Home");

  useEffect(() => {
    const getProductsByCategory = (productData) => {
      setIsLoading(true);
      const productsByCategory = productData.filter(product => product.category  === currentCategory);
      setProducts(productsByCategory);
    }; 
    getProductData().then(
        (resolvedData) => {
          if (currentCategory === null) {
            setProducts(resolvedData);
          } else {
            getProductsByCategory(resolvedData);
          }
          setIsLoading(false);
    })
  }, [displayedPage]);

  useEffect(() => {
    setCurrentProduct(null);
    setProducts(null);
  }, [currentCategory]);

  const handleMenuClick = ({target}) => {
    setDisplayedPage(`${target.innerHTML}`);
    if (categories.includes(target.innerHTML)) {
      setCurrentCategory(target.innerHTML.toLowerCase());
    } else {
      setCurrentCategory(null);  
    }
    window.scrollTo(0, 0);
    setCurrentProduct(null);
  }


  const handleProductClick = ({target}) => {
    const productName = target.id.slice(0, -1);
    const filtededProduct = products.filter(product => product.name === productName)[0];
    setCurrentProduct(filtededProduct);
    setDisplayedPage("ProductPage");
    window.scrollTo(0, 0);
  }
 
  const attachPage = () => {
    if (displayedPage === "Home") {
      return <Home 
                products={products}
                currentCategory={currentCategory}
                handleProductClick={handleProductClick} 
                />
    } else if (displayedPage === "ProductPage") {
      return <ProductPage
                currentProduct={currentProduct} 
              />
    } else if (displayedPage.toLocaleLowerCase() === currentCategory) {
      return <CategoryPage
                products={products}
                handleProductClick={handleProductClick}
                currentCategory={currentCategory}
            />
    }
  }

  return (
    <div className="App">
      <header className="site-header">
        <h1 
          className="site-title"
          onClick={() => setDisplayedPage("Home")}
        >RETRO SECRETS</h1>
        <nav className="nav-bar">
          <ul className="menu-list">
            <li
              className="menu-item"   
              onClick={handleMenuClick}
            >Home
            </li>
            {categories.map(
              (category, i) => (
                <li 
                  key={"category" + i}
                  className="menu-item" 
                  onClick={handleMenuClick}
                  >{category}
                  </li>))}
          </ul>
        </nav>
      </header>
      <main className="site-body">
        {products && attachPage()}
        {/* {isLoading && <p>Loading...</p>} */}
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} by Retro Secrets</p>
      </footer>
    </div>
  );
}

export default App;
