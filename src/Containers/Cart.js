import { CartProductList } from "../Components/CartProductList";
export const Cart = ({ 
                        productsInCart, 
                        deleteItemInCart,
                        adjustQuantityInCart, 
                    }) => {
    
    return (<div className="cart">
                <div className="cart-left-container">
                    <h1>My Cart</h1>
                    <div className="cart-products">
                        {productsInCart.map((product, i) =>(<div className="cart-row-wrapper">
                                                                <CartProductList 
                                                                    name={product.name}
                                                                    id={"product-in-cart-" + i}
                                                                    key={"product-in-cart-" + i}
                                                                    price={product.price}
                                                                    image={product.main_image}
                                                                    quantityInCart={product.quantityInCart}
                                                                    quantity={product.quantity}
                                                                    deleteItemInCart={deleteItemInCart}
                                                                    adjustQuantityInCart={adjustQuantityInCart}
                                                                    />
                                                                <p 
                                                                    className="cart-product-subtotal"
                                                                    >
                                                                    £{product.price * product.quantityInCart}.00
                                                                    </p>
                                                            </div>))}

                    </div>
                    <div className="promo-container">
                        <button 
                            className="toggle-btn"
                            onClick={() => console.log("click")}
                            >
                            <svg viewBox="0 0 14 16" fill="currentColor" width="14" height="16"><g id="final-cart" stroke="none" fill="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-515 -839)" fill="currentColor"><g id="coupon-icon" transform="rotate(30 -1300.653 1393.349)"><path d="M1,14.0046024 C0.999339408,13.9996515 9.00460243,14 9.00460243,14 C8.99965149,14.0006606 9,5.41421356 9,5.41421356 L5,1.41421356 L1,5.41421356 L1,14.0046024 Z M-2.72848411e-12,5 L5,-4.66116035e-12 L10,5 L10,14.0046024 C10,14.5543453 9.5443356,15 9.00460243,15 L0.995397568,15 C0.445654671,15 -2.72848411e-12,14.5443356 -2.72848411e-12,14.0046024 L-2.72848411e-12,5 Z" id="Rectangle-6" fill-rule="nonzero"></path><circle id="Oval-2" cx="5" cy="5" r="1"></circle></g></g></g></svg>
                            Enter a promo code
                        </button>
                        <div className="promo-code-box">
                            <input 
                                name="promo-code"
                                className="promo-code-input"
                                type="text"
                                placeholder="Enter a promo code"
                                ></input>
                            <button className="apply-btn">Apply</button>
                        </div>
                    </div>
                    <button 
                        className="toggle-btn"
                        onClick={() => console.log("click")}
                        >                  
                        <svg  
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="13" 
                        viewBox="0 0 12 13"
                            ><g fill="none" 
                                fill-rule="evenodd" 
                                stroke="none" 
                                stroke-width="1"
                                ><g 
                                    transform="translate(-515 -882)"
                                    ><g 
                                        transform="translate(515 882)"
                                        >
                                        <path 
                                            stroke="currentColor" 
                                            d="M.5.5h7.778L11.5 3.737V12.5H.5V.5z"
                                            >
                                        </path>
                                        <path 
                                            stroke="currentColor" 
                                            d="M10.793 3.5H8.5V1.207L10.793 3.5z"
                                            >
                                        </path>
                                        <path 
                                            fill="currentColor" 
                                            d="M3 3H6V4H3z"
                                            >
                                        </path>
                                        <path 
                                            fill="currentColor" 
                                            d="M3 6H9V7H3z"
                                        >
                                        </path>
                                        <path 
                                            fill="currentColor" 
                                            d="M3 9H9V10H3z"
                                            >
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        Add a note
                    </button>
                    <textarea
                        name="note"
                        className="note-textarea"
                        placeholder="Instructions? Specil requests? Add them here."
                    ></textarea>
                </div>
                <div className="cart-right-container">
                <h1>Order Summary</h1>
                    <div>
                        <span>Subtotal</span>
                        <span>£.00</span>
                    </div>
                    <div>
                        <span>Shipping</span>
                        <span>FREE</span>
                    </div>
                    <button>United Kingdom</button>
                    <div>
                        <span>Standard Delivery -£0.00</span>
                        <button><i class="fas fa-chevron-down"></i></button>
                    </div>
                    <ul>
                        <li>
                            <p>Standard Delivery -£0.00</p>
                            <p>3-5 business days</p>
                        </li>
                        <li>
                            <p>Express Delivery -£4.99</p>
                            <p>1-2 business days</p>
                        </li>
                    </ul>
                    <div>
                        <span>Total</span>
                        <span>£.00</span>
                    </div>
                    <button>Checkout</button>   
                </div>           
            </div>)
}