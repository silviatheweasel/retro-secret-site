export const CartProductList = ({ name, price, image, quantityInCart, id, deleteItemInCart }) => {
    return (<div 
                className="cart-product-row"
                >
                <div className="cart-product-image">
                    <img 
                        src={image.src}
                        alt={image.alt}
                        ></img>
                </div>
                <div className="cart-product-info">
                    <h2>{name}</h2>
                    <p className="cart-price">£{price}.00</p>
                    <div className="quantityControl">
                        <button className="minus">
                            <i className="fas fa-minus"></i>
                        </button>
                        <p className="quantity">{quantityInCart}</p>
                        <button className="plus">
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>            
                </div>
                <button
                    className="delete-product-in-cart"
                    id={name + "btn"}
                    onClick={deleteItemInCart}
                    >&times; 
                </button>
            </div>)
}