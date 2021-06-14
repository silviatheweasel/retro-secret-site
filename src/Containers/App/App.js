import './App.css';
import Home from "../Home/Home";
import { ProductPage } from "../ProductPage";
import { CategoryPage } from "../CategoryPage";
import { getProductData } from "../../utilities/getProductData";
import { useState, useEffect } from "react";
import { SlideOutCart } from '../SlideOutCart';
import { Cart } from "../Cart";
import { MenuBar } from "../../Components/MenuBar";
import { FooterPages } from "../FooterPages/FooterPages";
import { ErrorPage } from "../ErrorPage";

function App() {
  const categories = ["Necklaces", "Bracelets", "Rings", "Earrings"];
  const [currentCategory, setCurrentCategory] = useState("all");
  const [currentProduct, setCurrentProduct] = useState(null);
  const [displayedPage, setDisplayedPage] = useState("Home");

  //retrieves data, sets the display page to the error page if resolved data is falsy, 
  //saves the resolved data to the "products" state if the current category is "all"
  //or saves the data of a certain category to "products" if the current category is not "all"
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const getProductsByCategory = (productData) => {
      const productsByCategory = productData.filter(product => product.category  === currentCategory);
      setProducts(productsByCategory);
    }; 
    getProductData().then(
        (resolvedData) => {
          if (!resolvedData) {
            setDisplayedPage("Error")
          } else {
            if (currentCategory === "all") {
              setProducts(resolvedData);
            } else {
              getProductsByCategory(resolvedData);
            }
          }
    })
  }, [displayedPage]);


  const handleMenuClick = ({target}) => {
      //updates the display page state with the inner HTML of the event target
    if (target.innerHTML !== displayedPage) {
      setDisplayedPage(`${target.innerHTML}`);
      //sets the current category to either "all" or a specific category based on the inner HTML of event target
      if (categories.includes(target.innerHTML)) {
        setCurrentCategory(target.innerHTML.toLowerCase());
      } else {
        setCurrentCategory("all");  
      }
      //resets states
      setProducts(null);
      setIsMobileMenuOpen(false);
      window.scrollTo(0, 0);
      setCurrentProduct(null);
    }
    return;
  }

  //sets display page to "Home" and resets states
  const handleSiteLogoClick = () => {
    setDisplayedPage("Home");
    setCurrentCategory("all");
    window.scrollTo(0, 0);
    setCurrentProduct(null);
  }

  const [showQuickViewPage, setShowQuickViewPage] = useState(false);
  const handleProductClick = ({target}) => {
    //gets the name of the product from the id of the event target, and finds the product object with the same name
    const productName = target.id.slice(0, -1);
    const filtededProduct = products.filter(product => product.name === productName)[0];
    setCurrentProduct(filtededProduct);
    //if the id of the event target ends with "2", it is a button that opens the quick view page
    //sets the setShowQuickViewPage state to "true" to show the quick view page
    //otherwise, sets the display page to "ProductPage" to show the product page otherwise
    if (target.id.slice(-1) !== "2") {
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
    if (quantityInCart) {
      //if the quantity added to the cart is less than the stock quantity, checkes if this product is alread in the cart 
      if (quantityInCart <= currentProduct.quantity) {
        setProductsInCart((prev) => {
          //if the product is not in the cart, adds the product and an addition pair of key and value "quantityInCart: quantityInCart" to the productsInCarts state
          if (!productsInCart.find(product => product.name === currentProduct.name)) {
            return [...prev, {...currentProduct, quantityInCart: quantityInCart}]
        } else {
          //if the product is already in the cart, filters out the product, and adds it back with an updated "quantityInCart" value
            const filtered = prev.filter(product => product.name !== currentProduct.name);
            return [...filtered, {...currentProduct, quantityInCart: quantityInCart}]
          }
        })
        setShowQuickViewPage(false);
        setShowCart(true);
      } else {
        return;
      }     
    } else {
      return;
    }  
  }
  
  const hideCart = () => {
    setShowCart(false);
  }

  //if the target value is truthy, updates the quantity in the cart
  const handleQuantityInputChange = ({ target: { value }}) => {
    setQuantityInCart(value && parseInt(value));    
  }

  //resets the quantity in cart every time a product page is loaded
  useEffect(() => {
    setQuantityInCart(1);
  }, [currentProduct]);

  //attaches pages when the "displayedPage" state changes;
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
                handleCartProductClick={handleCartProductClick}
      />
    } 
  }

  //sets the display page with the name of the current category
  const getCategoryPage = () => {
    setDisplayedPage(currentCategory);
  }

  //sets the display page to the product page
  const getProductPage = () => {
    setDisplayedPage("ProductPage");
    setShowQuickViewPage(false);
    window.scrollTo(0, 0);
  }

  //gets the name of the product from the id of the event target and finds the product that has the same name
  //sets the display page to the product page of this product 
  const handleCartProductClick = ({target}) => {
    getProductPage();
    const productName = target.id.slice(0,-3);
    const filteredProduct = productsInCart.filter(product => product.name === productName)[0];
    setCurrentProduct(filteredProduct);
    setCurrentCategory("all");
    hideCart();
  }

  //finds the index of the product in the array and sets the current product to the product before or after it in the array
  const navigateProducts = ({target}) => {
    const currentProductName = currentProduct.name;
    let index = products.findIndex(product => product.name === currentProductName);
      if (index < products.length - 1 && target.id==="next-btn") {
        setCurrentProduct(products[index + 1]);
      } else if (index > 0 && target.id==="prev-btn") {
          setCurrentProduct(products[index - 1]);
      } else {
        return;
      }
  }

  //filters out the product with a matching name
  const deleteItemInCart = ({target}) => {
    const restOfProducts = productsInCart.filter(product => product.name !== target.id.slice(0, -3));
    setProductsInCart(restOfProducts);
  }

  const adjustQuantityInCart = ({target}) => {
    //creates a copy of the state
    let productsInCartCopy = [...productsInCart];
    //if the event target is a "plus" button, finds the index of the event target, which is also the index of the product
    if (target.id.includes("plus")) {
      const index = target.id.slice(4);
      //if the quantity in the cart is less than the stock quantity, adds 1 to the quantity in the cart
      if (productsInCartCopy[index].quantityInCart < productsInCartCopy[index].quantity) {
        productsInCartCopy[index].quantityInCart ++;
        setProductsInCart(productsInCartCopy);
      }
      return;
    } else {
        const index = target.id.slice(5);
        //if the quantity in the cart is larger or even to 2, subtracts 1 from it
        if (productsInCartCopy[index].quantityInCart >= 2) {
          productsInCartCopy[index].quantityInCart --;
          setProductsInCart(productsInCartCopy);
        //otherwise deletes the product from the array
        } else {
          productsInCartCopy.splice(index, 1);
          setProductsInCart(productsInCartCopy);
        }
    }
  }

  const openCart = () => {
    setDisplayedPage("Cart");
    setShowCart(false);
    setCurrentCategory(null)
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }

  //updates the customer's country with the id of event target
  const [location, setLocation] = useState("United Kingdom");
  const updateLocation = (event) => {
    setLocation(event.target.id);
  }

  const [staticPageTitle, setStaticPageTitle] = useState(null);
  const linkStaticPage = ({target}) => {
    setStaticPageTitle(target.innerHTML);
    setCurrentCategory(null);
    setDisplayedPage("StaticPage");
    window.scrollTo(0, 0);
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //if the screen is narrower or equal to 600px, updates the class names
  useEffect(()=> {
    if (window.screen.width <= 600) {
      if (isMobileMenuOpen) {
        document.getElementById("menu").classList.remove("mobile-hidden");
        document.getElementById("site-title").classList.add("mobile-hidden");
        document.getElementById("burger-nav-icon").classList.add("close-mobile");
        document.getElementById("nav-bar-cart-btn").classList.replace("desktop", "mobile");
      } else {
        document.getElementById("menu").classList.add("mobile-hidden");
        document.getElementById("site-title").classList.remove("mobile-hidden");
        document.getElementById("burger-nav-icon").classList.remove("close-mobile");
        document.getElementById("nav-bar-cart-btn").classList.replace("mobile", "desktop");
      }
    }
  }, [isMobileMenuOpen])

  return (
    <div className="App">
      <header className="site-header">
        <h1 
          className="site-title"
          id="site-title"
          onClick={handleSiteLogoClick}
          >RETRO SECRETS
        </h1>
        <button 
            className="burger-nav-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            >
            <div 
              className="burger-nav-icon"
              id="burger-nav-icon"
              >
            </div>
        </button>
        <nav className="nav-bar">
          <MenuBar
            handleMenuClick={handleMenuClick} 
            currentCategory={currentCategory}  
            categories={categories}
            setShowCart={setShowCart}
            productsInCart={productsInCart}
            isMobileMenuOpen={isMobileMenuOpen}
            openCart={openCart}
          />
        </nav>
      </header>
      <main className="site-body">
        {products && attachPage()}
        {displayedPage === "Error" && <ErrorPage />}
          <SlideOutCart
              productsInCart={productsInCart}
              showCart={showCart}
              hideCart={hideCart}
              deleteItemInCart={deleteItemInCart} 
              adjustQuantityInCart={adjustQuantityInCart}
              openCart={openCart}     
              handleCartProductClick={handleCartProductClick}       
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
