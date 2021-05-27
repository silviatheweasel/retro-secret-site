import { CartProductList } from "../Components/CartProductList"

export const SlideOutCart = ({ productsInCart, showCart, hideCart, deleteItemInCart }) => {

    const totalPriceArray = productsInCart.map(product => product.price * product.quantityInCart);
    const subtotal = totalPriceArray.length > 0 && totalPriceArray.reduce((accumulator, currentValue) => accumulator + currentValue);
        
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
                                                                id={"product-in-cart-" + i}
                                                                key={"product-in-cart-" + i}
                                                                price={product.price}
                                                                image={product.main_image}
                                                                quantityInCart={product.quantityInCart}
                                                                deleteItemInCart={deleteItemInCart}
                                                                />) : <p className="empty-cart">Cart is empty</p>}
                    </main>
                    {productsInCart.length > 0 && (<div className="subtotal-container">
                        <p>Subtotal</p>
                        <p>£{subtotal}.00</p>
                    </div>)}
                   {productsInCart.length > 0 && (<div className="view-cart-container">
                        <button
                            className="view-cart-btn"
                        >View Cart</button>
                    </div>)}
                </div>
            </div>)
}