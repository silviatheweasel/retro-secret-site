import './App.css';
import Home from "../Home/Home";
import { ProductPage } from "../ProductPage";
import { CategoryPage } from "../CategoryPage";
import { getProductData } from "../../utilities/getProductData";
import { useState, useEffect } from "react";
import { SlideOutCart } from '../SlideOutCart';
import { Cart } from "../Cart";
import { FooterPages } from "../FooterPages/FooterPages";
import { ErrorPage } from "../ErrorPage";
import { Header } from "../Header";
import { Footer } from "../Footer";

import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

function App() {
  const categories = ["Necklaces", "Bracelets", "Rings", "Earrings"];
  // const [currentProduct, setCurrentProduct] = useState(null);

  //retrieves data and saves data in products
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getProductData()
      .then((resolvedData) => {
          if (!resolvedData) {
            <Redirect to="/error" />
          } else {
            setProducts(resolvedData);
          }
    })
  }, []);

  const [clickedProduct, setClickedProduct] = useState("");
  const [showQuickViewPage, setShowQuickViewPage] = useState(false);

  
  const handleProductClick = ({target}) => {
    if (target.id.slice(-1) !== "2") {
      window.scrollTo(0, 0);
    } else {
      setClickedProduct(target.id.slice(0, target.id.length -1));
      setShowQuickViewPage(true);
    }
  }

  const hideQuickViewPage = () => {
    setShowQuickViewPage(false);
  }

  const [productsInCart, setProductsInCart] = useState([]);
  const [quantityInCart, setQuantityInCart] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const addItemToCart = ({target}) => {
    const { value } = target;
    const filteredProduct = products.filter(product => product.name === value)[0];
    if (quantityInCart) {
      //if the quantity added to the cart is less than the stock quantity, checkes if this product is alread in the cart 
      if (quantityInCart <= filteredProduct.quantity) {

        setProductsInCart((prev) => {
          //if the product is not in the cart, adds the product and an addition pair of key and value "quantityInCart: quantityInCart" to the productsInCarts state
          if (!productsInCart.find(product => product.name === value)) {
            return [...prev, {...filteredProduct, quantityInCart: quantityInCart}]
        } else {
          //if the product is already in the cart, filters out the product, and adds it back with an updated "quantityInCart" value
            const filtered = prev.filter(product => product.name !== value);
            return [...filtered, {...filteredProduct, quantityInCart: quantityInCart}]
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
  }, [productsInCart]);

  //gets the name of the product from the id of the event target and finds the product that has the same name
  const handleCartProductClick = () => {
    hideCart();
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
    setShowCart(false);
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }

  //updates the customer's country with the id of event target
  const [location, setLocation] = useState("United Kingdom");
  const updateLocation = (event) => {
    setLocation(event.target.id);
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //if the screen is narrower or equal to 600px, updates the class names
  // useEffect(()=> {
  //   if (window.screen.width <= 600) {
  //     if (isMobileMenuOpen) {
  //       document.getElementById("site-title").classList.add("mobile-hidden");
  //       document.getElementById("burger-nav-icon").classList.add("close-mobile");
  //       document.getElementById("nav-bar-cart-btn").classList.replace("desktop", "mobile");
  //     } else {
  //       document.getElementById("site-title").classList.remove("mobile-hidden");
  //       document.getElementById("burger-nav-icon").classList.remove("close-mobile");
  //       document.getElementById("nav-bar-cart-btn").classList.replace("mobile", "desktop");
  //     }
  //     return;
  //   }
  // }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleMenuClick = () => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }

  if (!products) {
    return (<>Loading...</>)
  }

  return (
    <Router>
    <div className="App">
      <SlideOutCart
          productsInCart={productsInCart}
          showCart={showCart}
          hideCart={hideCart}
          deleteItemInCart={deleteItemInCart} 
          adjustQuantityInCart={adjustQuantityInCart}
          openCart={openCart}     
          handleCartProductClick={handleCartProductClick}       
        />
      <Route>
        <Header 
          categories={categories}
          setShowCart={setShowCart}
          productsInCart={productsInCart}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          openCart={openCart}
          handleMenuClick={handleMenuClick}
        />
      </Route>
      <main className="site-body">
        <Switch>
          <Route path="/cart">
            <Cart 
              productsInCart={productsInCart} 
              deleteItemInCart={deleteItemInCart}
              adjustQuantityInCart={adjustQuantityInCart}
              updateLocation={updateLocation}
              location={location}
              handleCartProductClick={handleCartProductClick}
            />
          </Route>
          <Route path="/info/:pageTitle">
            <FooterPages/>
          </Route>
          <Route exact path="/">
            <Home 
              products={products}
              handleProductClick={handleProductClick} 
              showQuickViewPage={showQuickViewPage}
              hideQuickViewPage={hideQuickViewPage}
              clickedProduct={clickedProduct}
              addItemToCart={addItemToCart}
              handleQuantityInputChange={handleQuantityInputChange}
              quantityInCart={quantityInCart}
            />
          </Route>
          <Route path="/products/:categoryName/:productName">
            <ProductPage
              products={products}
              addItemToCart={addItemToCart}
              handleQuantityInputChange={handleQuantityInputChange}
              quantityInCart={quantityInCart}
            />
          </Route>
          <Route path="/:categoryName">
            <CategoryPage
              products={products}
              handleProductClick={handleProductClick} 
              showQuickViewPage={showQuickViewPage}
              hideQuickViewPage={hideQuickViewPage}
              clickedProduct={clickedProduct}
              addItemToCart={addItemToCart}
              handleQuantityInputChange={handleQuantityInputChange}
              quantityInCart={quantityInCart}    
            />
          </Route>         
          <Route path="/error">
            <ErrorPage />
          </Route>
        </Switch>
      </main>
      <Route>
        <Footer />
      </Route>
    </div>
    </Router>
  );
}

export default App;
