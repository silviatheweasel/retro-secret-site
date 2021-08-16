import React, { useEffect, useState } from "react";
import { AddToCart } from "./AddToCart";

export const ProductDetails = React.memo(({ 
                                            currentProducts, 
                                            index,
                                            addItemToCart, 
                                            handleQuantityInputChange,
                                            quantityInCart 
                                        }) => 
{
    const currentProduct = currentProducts[index];

    const { 
            images, 
            name, 
            price, 
            description, 
            length, 
            materials, 
            inner_diameter, 
            height, 
          } = currentProduct;

    const [displayImg, setDisplayImg] = useState(images[0]);

    useEffect(() => {setDisplayImg(currentProduct.main_image)}, [currentProduct]);

    const handleClick = ({target}) => {
        setDisplayImg({
                        "src": target.src, 
                        "alt": target.alt
                        });
    }

    const [isShort, setIsShort] = useState(true);
    
    const handleBtnClick = () => {
        setIsShort(!isShort);
    }

    let touchStartX = 0;
    let touchEndX = 0;
    const handleTouchStart = (event) => {
        touchStartX = event.changedTouches[0].clientX;
        return touchStartX;
    }
    const handleTouchEnd = (event) => {
        touchEndX = event.changedTouches[0].clientX;
        locationDifference();
    }

    const showNextImg = () => {
        for (let i = 0; i < images.length; i++) {
            if (displayImg.src === images[i].src) {
                if (i<=images.length -2) {
                    setDisplayImg(images[i+1]);
                } else {
                    setDisplayImg(images[0]);
                }
            }
        }
    }

    const showPrevImage = () => {
        for (let i = 0; i < images.length; i++) {
            if (displayImg.src === images[i].src) {
                if (i>=1) {
                    setDisplayImg(images[i-1]);
                } else {
                    setDisplayImg(images[images.length-1]);
                }
            }
        }
    }

    const locationDifference = () => {
        if (touchEndX > touchStartX) {
            showNextImg();
        } else if (touchEndX < touchStartX) {
            showPrevImage();
        } else {
            return;
        }
    }
   
    return (
        <div className="product-details-container">
            <div className="thumbnails-container">
                {images.map((image, i) => 
                    <img 
                        className="thumbnail"
                        src={image.src} 
                        alt={image.alt}
                        style = {{
                                    border: image.src === displayImg.src ? "2px solid black" : "none"
                                }}
                        key={name + "image" + i}
                        onClick={handleClick}
                        ></img>)}
            </div>
            <div 
                className="large-product-image"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                >
                <img 
                    src={displayImg.src} 
                    alt={displayImg.alt}
                ></img>
            </div>
            <div className="content">
                <h1 className="product-name">{name}</h1>
                <p className="product-price">{`£${price}.00`}</p>
                <div className="product-description-container">
                    <p 
                        className={isShort ? "product-description clamped" : "product-description"} 
                        id="product-description"
                        >{description}</p>
                    <div 
                        className = { isShort ? "notVisible" : "isVisible"} 
                        id="extra-info"
                        >
                        {length && <p>Length: {length} cm</p>}
                        {inner_diameter && <p>Inner Diameter: {inner_diameter} cm</p>}
                        {height && <p>Height: {height} cm</p>}
                        <p>Materials: {materials}</p>
                    </div>
                    <button 
                        onClick={handleBtnClick}
                        id="toggle-content-btn"
                        >{isShort ? "Read more" : "Less"}
                    </button>
                </div>
                <AddToCart 
                    addItemToCart={addItemToCart}
                    handleQuantityInputChange={handleQuantityInputChange}
                    quantityInCart={quantityInCart}
                    currentProduct={currentProduct}
                    />
            </div>
        </div>
    )
})