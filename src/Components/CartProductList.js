export const CartProductList = ({ name, price, image, quantityInCart }) => {
    return (<div>
        <div>
            <img 
                src={image.src}
                alt={image.alt}
                ></img>
        </div>
        <div>
            <h2>{name}</h2>
            <p>£{price}.00</p>
            <div>
                <button>-</button>
                <p>{quantityInCart}</p>
                <button>+</button>
            </div>            
        </div>
    </div>)
}