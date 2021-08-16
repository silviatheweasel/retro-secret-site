import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Placeholder from "./product-image-placeholder.jpg";

export const ProductOverview = React.memo(({ 
                                            mainImg, 
                                            currentCategory, 
                                            secondaryImg, 
                                            name, 
                                            price, 
                                            handleProductClick 
                                        }) => {

    const [displayImg, setDisplayImg] = useState({
        src: {Placeholder},
        alt: ""
    });
    const [isLoading, setIsLoading] = useState(true);

    const { categoryName } = useParams();

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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{backgroundColor: currentCategory === null | currentCategory === "all" ? "white" : "#F2F1F0"}}
        >
                <div className="flip-image">
            <Link to={categoryName === undefined ? ("/products/all/" + name.toLowerCase().replaceAll(" ", "_")) : ("/products/" + categoryName + "/" + name.toLowerCase().replaceAll(" ", "_"))}>
                        <img 
                            src={displayImg.src} 
                            alt={displayImg.alt}
                            id={name + "1"}
                            className="display-image"
                            style={{
                                opacity: isLoading ? 0.5 : 1,
                                transition: "opacity .15s linear"
                            }}
                        ></img>
            </Link>
                    {window.screen.width >= 600 && 
                    <div 
                        id={name + "2"}
                        className="quick-view-btn"
                        onClick={handleProductClick}
                    >Quick View
                    </div>
                    }
                </div>
                <Link to={categoryName === undefined ? ("/products/all/" + name.toLowerCase().replaceAll(" ", "_")) : ("/products/" + categoryName + "/" + name.toLowerCase().replaceAll(" ", "_"))}>
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
            </Link>
        </button>
    )
})