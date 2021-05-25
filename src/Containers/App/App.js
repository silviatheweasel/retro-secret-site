import './App.css';
import Home from "../Home/Home";
import { ProductPage } from "../ProductPage";
import { CategoryPage } from "../CategoryPage";
import { getProductData } from "../../utilities/getProductData";
import { QuickViewPage } from "../QuickViewPage";
import { useState, useEffect } from "react";

function App() {
  const categories = ["Necklaces", "Bracelets", "Rings", "Earrings"];

  // const [isLoading, setIsLoading] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(null);

  const [currentProduct, setCurrentProduct] = useState(null);

  //retrieves data and saves product data in the state
  const [products, setProducts] = useState(null);

  const [displayedPage, setDisplayedPage] = useState("Home");

  useEffect(() => {
    const getProductsByCategory = (productData) => {
      // setIsLoading(true);
      const productsByCategory = productData.filter(product => product.category  === currentCategory);
      setProducts(productsByCategory);
    }; 
    getProductData().then(
        (resolvedData) => {
          if (currentCategory === null | currentCategory === "all") {
            setProducts(resolvedData);
          } else {
            getProductsByCategory(resolvedData);
          }
          // setIsLoading(false);
    })
  }, [displayedPage]);

  const handleMenuClick = ({target}) => {
    if (target.innerHTML !== displayedPage) {
      setDisplayedPage(`${target.innerHTML}`);
      if (categories.includes(target.innerHTML)) {
        setCurrentCategory(target.innerHTML.toLowerCase());
      } else {
        setCurrentCategory("all");  
      }
      setProducts(null);
      window.scrollTo(0, 0);
      setCurrentProduct(null);
    }
    return;
  }

  const handleSiteLogoClick = () => {
    setDisplayedPage("Home");
    setCurrentCategory("all");
    window.scrollTo(0, 0);
    setCurrentProduct(null);
  }

  const [showQuickViewPage, setShowQuickViewPage] = useState(false);
  const handleProductClick = ({target}) => {
    const productName = target.id.slice(0, -1);
    const filtededProduct = products.filter(product => product.name === productName)[0];
    setCurrentProduct(filtededProduct);
    if (target.id.slice(-1) !== "6") {
      setDisplayedPage("ProductPage");
      window.scrollTo(0, 0);
    } else {
      setShowQuickViewPage(true);
    }
  }

  const hideQuickViewPage = () => {
    setShowQuickViewPage(false);
  }

  const attachPage = () => {
    if (displayedPage === "Home") {
      return <Home 
                products={products}
                currentCategory={currentCategory}
                handleProductClick={handleProductClick} 
                showQuickViewPage={showQuickViewPage}
                hideQuickViewPage={hideQuickViewPage}
                currentProduct={currentProduct} 
                />
    } else if (displayedPage === "ProductPage") {
      return <ProductPage
                currentProduct={currentProduct} 
                getCategoryPage={getCategoryPage}
                handleSiteLogoClick={handleSiteLogoClick}
                navigateProducts={navigateProducts}
                products={products}
              />
    } else if (displayedPage.toLocaleLowerCase() === currentCategory) {
      return <CategoryPage
                products={products}
                handleProductClick={handleProductClick}
                currentCategory={currentCategory}
                showQuickViewPage={showQuickViewPage}
                hideQuickViewPage={hideQuickViewPage}
                currentProduct={currentProduct} 
            />
    }
  }

  const getCategoryPage = () => {
    setDisplayedPage(currentCategory);
  }

  const navigateProducts = ({target}) => {
    const currentProductName = currentProduct.name;
    let index = products.findIndex(product => product.name === currentProductName);
      if (index < products.length - 1 && target.id==="next-btn") {
        setCurrentProduct(products[index +1]);
      } else if (index > 0 && target.id==="prev-btn") {
          setCurrentProduct(products[index -1]);
      } else {
        return;
      }
  }

  return (
    <div className="App">
      <header className="site-header">
        <h1 
          className="site-title"
          onClick={handleSiteLogoClick}
        >RETRO SECRETS</h1>
        <nav className="nav-bar">
          <ul className="menu-list">
            <li
              className="menu-item"   
              onClick={handleMenuClick}
              style={{color: currentCategory === null ? "#9E8765" : "black"
                    }}
            >Home
            </li>
            {categories.map(
              (category, i) => (
                <li 
                  key={"category" + i}
                  className="menu-item" 
                  onClick={handleMenuClick}
                  style={{color: currentCategory === category.toLowerCase() ? "#9E8765" : "black"}}
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
