import { useState } from "react";

export const ProductOverview = ({ mainImg, secondaryImg, name, price, handleProductClick }) => {
    const [displayImg, setDisplayImg] = useState(mainImg);

    const handleMouseEnter = () => {
        setDisplayImg(secondaryImg);
    }

    const handleMouseLeave = () => {
        setDisplayImg(mainImg);
    }
    
    return (
        <button 
            className="product-overview-container"
            id={name + "5"}
            onClick={handleProductClick}
            >
            <div className="flip-image">
                <img 
                    src={displayImg.src} 
                    alt={displayImg.alt}
                    id={name + "1"}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="display-image"
                ></img>
            </div>
            <h3 
                id={name + "3"}
                className="product-overview-title"
                >{name}
            </h3>
            <p 
                id={name + "4"}
                className="product-overview-text"
                >£{price}.00
            </p>
        </button>
    )
}