import { useEffect } from "react";

export const AddToCart = ({ 
                            addItemToCart, 
                            handleQuantityInputChange, 
                            quantityInCart,
                            currentProduct
                        }) => {
    //toggles the visibility of warning messages
    useEffect(() => {
        if (!quantityInCart) {
            document.getElementById("not-valid-warning").style.display = "block";
        } 
        if (quantityInCart) {
            document.getElementById("not-valid-warning").style.display = "none";
        } 
        if (quantityInCart > currentProduct.quantity) {
            document.getElementById("over-limit-warning").style.display = "block";
        } 
        if (quantityInCart <= currentProduct.quantity) {
            document.getElementById("over-limit-warning").style.display = "none";
        }
        }, [quantityInCart]);
        
    return (<>
                <label>
                    Quantity
                    <input 
                        type="number"
                        name="quantity"
                        min="1"
                        max={currentProduct.quantity}
                        autoComplete="off"
                        onChange= {handleQuantityInputChange}
                        value={quantityInCart}
                        >
                    </input>
                </label>
                <div
                    className="error-alert"
                    id="not-valid-warning"
                    >
                    <i className="fas fa-exclamation-circle"></i>
                    Quantity not valid
                </div>
                <div
                    className="error-alert"
                    id="over-limit-warning"
                    >
                    <i className="fas fa-exclamation-circle"></i>
                    There are only {currentProduct.quantity} in stock
                </div>
                <button 
                    className="add-to-cart-btn"
                    value={currentProduct.name}
                    onClick={addItemToCart}
                    >Add to Cart
                </button>
             </>)
}