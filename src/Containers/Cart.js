import { CartProductList } from "../Components/CartProductList";
import { useState, useEffect } from "react";
import { CountryNameSelect } from "../Components/CountryNameSelect";
export const Cart = ({ 
                        productsInCart, 
                        deleteItemInCart,
                        adjustQuantityInCart,
                        handleSiteLogoClick, 
                        updateLocation,
                        location,
                        handleCartProductClick
                    }) => {

    const [showPromoBox, setShowPromoBox] = useState(false);
    const [showNoteBox, setShowNoteBox] = useState(false);
    const [showPostOptions, setShowPostOptions] = useState(false);

    const totalPriceArray = productsInCart.map(product => product.price * product.quantityInCart);
    const subtotal = totalPriceArray.length > 0 && totalPriceArray.reduce((accumulator, currentValue) => accumulator + currentValue);

    const deliveryOptions = [{
                                name: "Standard Delivery", 
                                prices: [0.00, 2.48]
                            }, {
                                name: "Express Delivery",
                                prices: [0.00, 4.99]
                            }];
    
    const [shippingFee, setShippingFee] = useState(null);
    const [shippingOption, setShippingOption] = useState(deliveryOptions[0].name);

    useEffect(() => {
        const updateShipment = () => {
            if (shippingOption === deliveryOptions[0].name) {
                if (subtotal >= 30) {
                    setShippingFee(deliveryOptions[0].prices[0]);
                } else {
                    setShippingFee(deliveryOptions[0].prices[1]);
                }
            } else if (shippingOption === deliveryOptions[1].name) {
                if (subtotal >= 55) {
                    setShippingFee(deliveryOptions[1].prices[0]);
                } else {
                 setShippingFee(deliveryOptions[1].prices[1]);
                }
            } 
         }
        updateShipment();
    }, [subtotal])

    const [showCountryBox, setShowCountryBox] = useState(false);

    return (<div className="cart-wrapper">
                <div className="cart">
                    {productsInCart.length > 0 && (<>
                        <div className="cart-left-container">
                            <h1>My Cart</h1>
                            <div className="cart-products">
                                {productsInCart.map((product, i) =>(<div 
                                                                        className="cart-row-wrapper"
                                                                        key={"cart-row-wrapper" + i}
                                                                        >
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
                                                                            handleCartProductClick={handleCartProductClick}
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
                                    onClick={() => setShowPromoBox(!showPromoBox)}
                                    >
                                    <svg viewBox="0 0 14 16" fill="currentColor" width="14" height="16"><g id="final-cart" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><g transform="translate(-515 -839)" fill="currentColor"><g id="coupon-icon" transform="rotate(30 -1300.653 1393.349)"><path d="M1,14.0046024 C0.999339408,13.9996515 9.00460243,14 9.00460243,14 C8.99965149,14.0006606 9,5.41421356 9,5.41421356 L5,1.41421356 L1,5.41421356 L1,14.0046024 Z M-2.72848411e-12,5 L5,-4.66116035e-12 L10,5 L10,14.0046024 C10,14.5543453 9.5443356,15 9.00460243,15 L0.995397568,15 C0.445654671,15 -2.72848411e-12,14.5443356 -2.72848411e-12,14.0046024 L-2.72848411e-12,5 Z" id="Rectangle-6" fillRule="nonzero"></path><circle id="Oval-2" cx="5" cy="5" r="1"></circle></g></g></g></svg>
                                    Enter a promo code
                                </button>
                                <div   
                                    className="promo-code-box"
                                    id="promo-code-box"
                                    style={{ display: showPromoBox ? "block" : "none" }}
                                    >
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
                                onClick={() => setShowNoteBox(!showNoteBox)}
                                >                  
                                <svg  
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="12" 
                                    height="13" 
                                    viewBox="0 0 12 13"
                                        ><g fill="none" 
                                            fillRule="evenodd" 
                                            stroke="none" 
                                            strokeWidth="1"
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
                                maxLength="200"
                                style={{ display: showNoteBox ? "block" : "none" }}
                                placeholder="Instructions? Special requests? Add them here."
                            ></textarea>
                        </div>
                        <div className="cart-right-container">
                            <h1>
                                Order Summary
                            </h1>
                            <div className="order-summary-row">
                                <span>Subtotal</span>
                                <span className="float-right">£{subtotal}.00</span>
                            </div>
                            <div className="order-summary-row">
                                <span>Shipping</span>
                                <span 
                                    className="float-right"
                                    >{shippingFee === 0 ? "FREE" : "£" + shippingFee}
                                </span>
                            </div>
                            <button 
                                className="current-country"
                                onClick={() => setShowCountryBox(true)}
                                >{location}
                            </button>
                            {location !== "United Kingdom" && <p className="postage-eligibility-alert">
                                <i className="fas fa-exclamation-circle"></i>
                                Sorry, we don't ship to your area.
                                </p>}
                            {location === "United Kingdom" && <div className="postage-wrapper">
                                <div className="postage-box">
                                    <span>{shippingOption} - £{shippingFee}</span>
                                    <button 
                                        className="toggle-arrow-btn">
                                        <i 
                                            className={showPostOptions ? "fas fa-chevron-up" : "fas fa-chevron-down"}
                                            onClick={() => {
                                                setShowPostOptions(!showPostOptions);
                                            }}                           
                                        ></i>
                                    </button>
                                </div>
                                {showPostOptions && <ul className="delivery-options-container"> 
                                    <li 
                                        key="delivery-option-1"
                                        onClick={() => {
                                            if (subtotal >=30) {
                                                setShippingFee(deliveryOptions[0].prices[0]);
                                            } else {
                                                setShippingFee(deliveryOptions[0].prices[1]);
                                            }
                                            setShippingOption(deliveryOptions[0].name);
                                            setShowPostOptions(false);
                                        }}
                                        >
                                        <p>{deliveryOptions[0].name} - £{subtotal >= 30 ? deliveryOptions[0].prices[0] : deliveryOptions[0].prices[1] }</p>
                                        <p className="postage-time">3-5 business days</p>
                                    </li>
                                    <li 
                                        key="delivery-option-2"
                                        onClick={() => {
                                            if (subtotal >=55) {
                                                setShippingFee(deliveryOptions[1].prices[0]);
                                            } else {
                                                setShippingFee(deliveryOptions[1].prices[1]);
                                            }
                                            setShippingOption(deliveryOptions[1].name);
                                            setShowPostOptions(false);
                                        }}
                                        >
                                        <p>{deliveryOptions[1].name} - £{subtotal >= 55 ? deliveryOptions[1].prices[0] : deliveryOptions[1].prices[1] }</p>
                                        <p className="postage-time">1-2 business days</p>
                                    </li>
                                </ul>}
                            </div>}
                            <div className="total-row">
                                <span>Total</span>
                                <span>£{(subtotal + shippingFee).toFixed(2)}</span>
                            </div>
                            <button 
                                className="checkout-btn"
                            ><i 
                                className="fas fa-lock"
                                ></i>Checkout
                            </button>   
                        </div>           
                    </>)}
                    {productsInCart.length === 0 && (<div className="empty-cart-container">
                        <h1>My Cart</h1>
                        <div className="empty-cart-prompt">
                            <h2>Cart is empty</h2>
                            <p onClick={handleSiteLogoClick}>Continue shopping</p>
                        </div>
                    </div>)}
                </div>
                {showCountryBox && <div className="country-select-wrapper">
                    <CountryNameSelect 
                        updateLocation={updateLocation}
                        setShowCountryBox={setShowCountryBox}
                        location={location}
                        />
                </div>}
            </div>)
}