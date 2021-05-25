import React, { useEffect, useState } from "react";
import { AddToCart } from "../AddToCart";

export const ProductDetails = React.memo(({ currentProduct }) => {
    const { 
            images, 
            name, 
            price, 
            main_image, 
            description, 
            length, 
            materials, 
            inner_diameter, 
            height 
          } = currentProduct;
    const [displayImg, setDisplayImg] = useState(main_image);
    useEffect(() => setDisplayImg(main_image), [currentProduct]);
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
            <div className="large-product-image">
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
                <AddToCart />
            </div>
        </div>
    )
})