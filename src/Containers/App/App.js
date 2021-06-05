import './App.css';
import Home from "../Home";
import { ProductPage } from "../ProductPage";
import { CategoryPage } from "../CategoryPage";
import { getProductData } from "../../utilities/getProductData";
import { useState, useEffect } from "react";
import { SlideOutCart } from '../SlideOutCart';
import {Cart } from "../Cart";
import { FooterPages } from "../FooterPages/FooterPages";

function App() {
  const categories = ["Necklaces", "Bracelets", "Rings", "Earrings"];

  const [currentCategory, setCurrentCategory] = useState("all");

  const [currentProduct, setCurrentProduct] = useState(null);

  //retrieves data and saves product data in the state
  const [products, setProducts] = useState(null);

  const [displayedPage, setDisplayedPage] = useState("Home");

  useEffect(() => {
    const getProductsByCategory = (productData) => {
      const productsByCategory = productData.filter(product => product.category  === currentCategory);
      setProducts(productsByCategory);
    }; 
    getProductData().then(
        (resolvedData) => {
          if (currentCategory === "all") {
            setProducts(resolvedData);
          } else {
            getProductsByCategory(resolvedData);
          }
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

  const [productsInCart, setProductsInCart] = useState([]);
  const [quantityInCart, setQuantityInCart] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const addItemToCart = () => {
    setProductsInCart((prev) => {
      if (!productsInCart.find(product => product.name === currentProduct.name)) {
        return [...prev, {...currentProduct, quantityInCart: quantityInCart}]
    } else {
        const filtered = prev.filter(product => product.name !== currentProduct.name);
        return [...filtered, {...currentProduct, quantityInCart: quantityInCart}]
      }
    })
    setShowQuickViewPage(false);
    setShowCart(true);
  }
  
  const hideCart = () => {
    setShowCart(false);
  }

  const handleQuantityInputChange = ({ target: { value }}) => {
    setQuantityInCart(parseInt(value));
  }

  useEffect(() => {
    setQuantityInCart(1)
  }, [currentProduct]);

  const attachPage = () => {
    if (displayedPage === "Home") {
      return <Home 
                products={products}
                currentCategory={currentCategory}
                handleProductClick={handleProductClick} 
                showQuickViewPage={showQuickViewPage}
                hideQuickViewPage={hideQuickViewPage}
                currentProduct={currentProduct}
                getProductPage={getProductPage} 
                addItemToCart={addItemToCart}
                handleQuantityInputChange={handleQuantityInputChange}
                quantityInCart={quantityInCart}
                />
    } else if (displayedPage === "ProductPage") {
      return <ProductPage
                currentProduct={currentProduct} 
                getCategoryPage={getCategoryPage}
                handleSiteLogoClick={handleSiteLogoClick}
                navigateProducts={navigateProducts}
                currentCategory={currentCategory}
                products={products}
                addItemToCart={addItemToCart}
                handleQuantityInputChange={handleQuantityInputChange}
                quantityInCart={quantityInCart}
              />
    } else if (displayedPage.toLocaleLowerCase() === currentCategory) {
      return <CategoryPage
                products={products}
                handleProductClick={handleProductClick}
                currentCategory={currentCategory}
                showQuickViewPage={showQuickViewPage}
                hideQuickViewPage={hideQuickViewPage}
                currentProduct={currentProduct} 
                getProductPage={getProductPage} 
                addItemToCart={addItemToCart}
                handleQuantityInputChange={handleQuantityInputChange}
                quantityInCart={quantityInCart}
            />
    } else if (displayedPage === "StaticPage") {
      return <FooterPages 
                staticPageTitle={staticPageTitle}
                />
    } else {
      return <Cart 
                productsInCart={productsInCart}
                deleteItemInCart={deleteItemInCart}
                adjustQuantityInCart={adjustQuantityInCart}
                handleSiteLogoClick={handleSiteLogoClick}
                updateLocation={updateLocation}
                location={location}
      />
    }
  }

  const getCategoryPage = () => {
    setDisplayedPage(currentCategory);
  }

  const getProductPage = () => {
    setDisplayedPage("ProductPage");
    setShowQuickViewPage(false);
    window.scrollTo(0, 0);
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

  const deleteItemInCart = ({target}) => {
    const restOfProducts = productsInCart.filter(product => product.name !== target.id.slice(0, -3));
    setProductsInCart(restOfProducts);
  }

  const adjustQuantityInCart = ({target}) => {
    let productsInCartCopy = [...productsInCart];
    if (target.id.includes("plus")) {
      const index = target.id.slice(4);
      if (productsInCartCopy[index].quantityInCart < productsInCartCopy[index].quantity) {
        productsInCartCopy[index].quantityInCart ++;
        setProductsInCart(productsInCartCopy);
      }
      return;
    } else {
        const index = target.id.slice(5);
        if (productsInCartCopy[index].quantityInCart >= 2) {
          productsInCartCopy[index].quantityInCart --;
          setProductsInCart(productsInCartCopy);
        } else {
          productsInCartCopy.splice(index, 1);
          setProductsInCart(productsInCartCopy);
        }
    }
  }

  const openCart = () => {
    setDisplayedPage("cart");
    setShowCart(false);
    setCurrentCategory(null)
    window.scrollTo(0, 0);
  }

  const [location, setLocation] = useState("United Kingdom");

  const updateLocation = (event) => {
    setLocation(event.target.id);
  }

  const [staticPageTitle, setStaticPageTitle] = useState(null);
  const linkStaticPage = ({target}) => {
    setStaticPageTitle(target.innerHTML);
    setDisplayedPage("StaticPage");
    window.scrollTo(0, 0);
  }


  return (
    <div className="App">
      <header className="site-header">
        <h1 
          className="site-title"
          onClick={handleSiteLogoClick}
          >RETRO SECRETS
        </h1>
        <button
          className="nav-bar-cart-btn"
          onClick={() => setShowCart(true)}
        >{productsInCart.length}
        </button>
        <nav className="nav-bar">
          <ul className="menu-list">
            <li
              className="menu-item" 
              key="home"  
              onClick={handleMenuClick}
              style={{color: currentCategory === "all" ? "#9E8765" : "black"
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
          <SlideOutCart
              productsInCart={productsInCart}
              showCart={showCart}
              hideCart={hideCart}
              deleteItemInCart={deleteItemInCart} 
              adjustQuantityInCart={adjustQuantityInCart}
              openCart={openCart}            
              />
      </main>
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-left">
                <h2>Quick Links</h2>
                <ul className="quick-link-list">
                  <li onClick={linkStaticPage}>SHIPPING INFO</li>
                  <li onClick={linkStaticPage}>RETURN AND EXCHANGE POLICY</li>
                  <li onClick={linkStaticPage}>OUR PRODUCTS AND YOUR HEALTH</li>
                  <li onClick={linkStaticPage}>OUR PACKAGING</li>
                  <li onClick={linkStaticPage}>CARE INSTRUCTIONS</li>
                  <li onClick={linkStaticPage}>ABOUT US</li>
                  <li onClick={linkStaticPage}>CONTACT US</li>
                </ul>
          </div>
          <div className="footer-right">
                <p>Subscribe to learn about the latest arrivals and get exclusive offers! </p>
                <form>
                  <input
                    type="email"
                    name="email"
                    className="email-input"
                    placeholder="Enter your email here*"
                    required
                  ></input>
                  <button className="subscribe-btn">
                    Subscribe
                  </button>
                </form>
          </div>

        </div>
        <p>© {new Date().getFullYear()} by Retro Secrets</p>
      </footer>
    </div>
  );
}

export default App;
