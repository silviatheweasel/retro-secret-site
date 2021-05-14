export const ProductOverview = ({ mainImg, secondaryImg, name, price, handleProductClick }) => {
    return (
        <button 
            className="product-overview-container"
            id={name + "5"}
            onClick={handleProductClick}
            >
            <div className="flip-image">
                <img 
                    src={mainImg.src} 
                    alt={mainImg.alt}
                    id={name + "1"}
                ></img>
                <img 
                    src={secondaryImg.src} 
                    alt={secondaryImg.alt}
                    id={name + "2"}
                ></img>
            </div>
            <h3 id={name + "3"}>{name}</h3>
            <p id={name + "4"}>£{price}.00</p>
        </button>
    )
}