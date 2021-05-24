export const AddToCart = () => {
    return (<>
                <label>
                    Quantity
                    <input 
                        type="number"
                        name="quantity"
                        min="1"
                        ></input>
                </label>
                <button className="add-to-cart-btn">Add to Cart</button>
             </>)
}