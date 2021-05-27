export const AddToCart = ({ addItemToCart, handleQuantityInputChange, quantityInCart }) => {
    return (<>
                <label>
                    Quantity
                    <input 
                        type="number"
                        name="quantity"
                        min="1"
                        autoComplete="off"
                        onChange={handleQuantityInputChange}
                        value={quantityInCart}
                        ></input>
                </label>
                <button 
                    className="add-to-cart-btn"
                    onClick={addItemToCart}
                    >Add to Cart
                </button>
             </>)
}