export const CartProductList = ({ 
                                    name, 
                                    price, 
                                    image, 
                                    quantityInCart,
                                    deleteItemInCart,
                                    adjustQuantityInCart,
                                    id,
                                    quantity

                                 }) => {

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
                            <i 
                                className="fas fa-minus"
                                id={"minus" + id.slice(16)}
                                onClick={adjustQuantityInCart}
                                ></i>
                        </button>
                        <p className="quantity">{quantityInCart}</p>
                        <button className="plus">
                            <i 
                                className="fas fa-plus"
                                id={"plus" + id.slice(16)}
                                onClick={adjustQuantityInCart}
                                style={{
                                    color: quantityInCart === quantity ? "#d3d3d3": "gray",
                                    cursor: quantityInCart === quantity ? "default" : "pointer"
                                }}
                                ></i>
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