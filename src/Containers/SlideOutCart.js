import { CartProductList } from "../Components/CartProductList";
import { Link } from "react-router-dom";

export const SlideOutCart = ({ 
                                productsInCart, 
                                showCart, 
                                hideCart, 
                                deleteItemInCart,
                                adjustQuantityInCart,
                                openCart,
                                handleCartProductClick
                            }) => {

    const totalPriceArray = productsInCart.map(product => product.price * product.quantityInCart);
    const subtotal = totalPriceArray.length > 0 && totalPriceArray.reduce((accumulator, currentValue) => accumulator + currentValue);

    //checks if the X value of the start of the touch event is smaller than the end, to determing whether the user swipped right
    let touchStartX = 0;
    let touchEndX = 0;
    const handleTouchStart = (event) => {
        touchStartX = event.changedTouches[0].clientX;
        return touchStartX;
    }
    const handleTouchEnd = (event) => {
        touchEndX = event.changedTouches[0].clientX;
        hideCartBySwipe();
    }

    const hideCartBySwipe = () => {
        if (touchEndX > touchStartX) {
            hideCart();
        } else {
            return;
        }
    }
        
    return (<div 
                id="slide-out-cart-wrapper"
            >
                <div
                    className="dimmer"
                    style={{width: showCart ? "100%" : 0}}
                    onClick={hideCart}
                >
                </div>
                <div 
                    id="slide-out-cart"
                    className="slide-out-cart"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    style={{width: showCart ? (window.screen.width <= 600 ? "100%" : "370px") : 0}}
                >
                    <header>
                        <button className="slide-right-btn">
                            <i 
                                className="fas fa-chevron-right"
                                onClick={hideCart}
                                >
                            </i>
                        </button>
                        <h1 className="cart-title">Cart</h1>
                    </header>
                    <main>
                        {productsInCart.length > 0 ? 
                            productsInCart.map((product, i) => 
                            <CartProductList 
                                name={product.name}
                                id={"product-in-cart-" + i}
                                key={"product-in-cart-" + i}
                                price={product.price}
                                image={product.main_image}
                                quantityInCart={product.quantityInCart}
                                quantity={product.quantity}
                                category={product.category}
                                deleteItemInCart={deleteItemInCart}
                                adjustQuantityInCart={adjustQuantityInCart}
                                handleCartProductClick={handleCartProductClick}
                            />) : 
                            <p className="empty-cart">Cart is empty</p>
                        }
                    </main>
                    {productsInCart.length > 0 && (
                        <div className="subtotal-container">
                            <p>Subtotal</p>
                            <p>??{subtotal}.00</p>
                        </div>
                    )}
                   {productsInCart.length > 0 && (
                        <div className="view-cart-container">
                            <button
                                className="view-cart-btn"
                                onClick={openCart}
                            >
                                <Link 
                                    to="/cart"
                                    className="link"
                                >
                                    View Cart
                                </Link>
                            </button>
                        </div>
                    )}
                </div>
            </div>)
}