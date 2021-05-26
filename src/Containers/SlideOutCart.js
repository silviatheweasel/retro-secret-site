import { CartProductList } from "../Components/CartProductList"

export const SlideOutCart = ({ productsInCart, showCart, hideCart }) => {
    return (<div 
                id="slide-out-cart-wrapper"
                style={{
                    backgroundColor: showCart ? "rgba(0, 0, 0, 0.5)" : "transparent",
                    zIndex: showCart ? "50" : "-20"
                }}>
                <div 
                    id="slide-out-cart"
                    style={{width: showCart ? "370px" : 0}}
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
                        {productsInCart.length > 0 ? productsInCart.map((product, i) => <CartProductList 
                                                                name={product.name}
                                                                key={"product-in-cart-" + i}
                                                                price={product.price}
                                                                image={product.main_image}
                                                                quantityInCart={product.quantityInCart}
                                                                />) : <p className="empty-cart">Cart is empty</p>}
                    </main>
                    <div className="subtotal-container">
                        <p>Subtotal</p>
                        <p>£.00</p>
                    </div>
                    <div className="view-cart-container">
                        <button
                            className="view-cart-btn"
                        >View Cart</button>
                    </div>
                </div>
            </div>)
}