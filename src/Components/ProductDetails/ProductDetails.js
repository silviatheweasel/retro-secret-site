import { useState } from "react";

export const ProductDetails = ({ currentProduct }) => {
    const { images, name, price, main_image, description, length, materials } = currentProduct;
    const [displayImg, setDisplayImg] = useState(main_image);
    const handleClick = ({target}) => {
        setDisplayImg({
                        "src": target.src, 
                        "alt": target.alt
                        });
    }
    return (
        <main>
            <div className="thumbnails">
                {images.map((image, i) => 
                    <img 
                        src={image.src} 
                        alt={image.alt}
                        key={name + "image" + i}
                        onClick={handleClick}
                        ></img>)}
            </div>
            <div className="large-product-image">
                <img src={displayImg.src} alt={displayImg.alt}></img>
            </div>
            <div className="content">
                <h1>{name}</h1>
                <h2>{`£${price}.00`}</h2>
                <div>
                    <p>{description}</p>
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

        </main>
    )
}