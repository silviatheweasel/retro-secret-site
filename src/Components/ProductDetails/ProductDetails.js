import React, { useState } from "react";

export const ProductDetails = React.memo(({ currentProduct }) => {
    const { images, name, price, main_image, description, length, materials } = currentProduct;
    const [displayImg, setDisplayImg] = useState(main_image);
    const handleClick = ({target}) => {
        setDisplayImg({
                        "src": target.src, 
                        "alt": target.alt
                        });
        // target.style.border = "2px solid black";
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
                    <p className="product-description">{description}</p>
                    <p>Length: {length}cm</p>
                    <p>Materials: {materials}</p>
                </div>
                <label>
                    Quantity
                    <input 
                        type="number"
                        name="quantity"
                        min="1"
                        ></input>
                </label>
                <button>Add to Cart</button>
            </div>
        </div>
    )
})