import React, { useState, useEffect } from "react";
import Placeholder from "./product-image-placeholder.jpg";

export const ProductOverview = React.memo(({ mainImg, secondaryImg, name, price, handleProductClick }) => {

    const [displayImg, setDisplayImg] = useState({
        src: {Placeholder},
        alt: ""
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const imageToLoad = new Image();
        imageToLoad.src=mainImg.src;
        imageToLoad.alt=mainImg.alt;
        imageToLoad.onload = () => {
            setDisplayImg(mainImg);
            setIsLoading(false);
        }      
    }, [mainImg])

    
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
                    style={{
                        opacity: isLoading ? 0.5 : 1,
                        transition: "opacity .15s linear"
                      }}
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
})