import { AddToCart } from "../Components/AddToCart";
import { ImageControlDots } from "../Components/ImageControlDots";
import { useState, useEffect } from "react";

export const QuickViewPage = ({ currentProduct, getProductPage }) => {     
    const {
            images, 
            name, 
            price, 
            main_image 
        } = currentProduct;
    const [displayedImg, setDisplayedImg] = useState(main_image); 
    useEffect(() => setDisplayedImg(main_image), [currentProduct]); 

    const switchImg = ({target}) => {
        setDisplayedImg({
                        src: target.id,
                        alt: ""
                        });
    }

    return (<>
                <div 
                    className="quick-view-content"
                >
                    <div className="quick-view-image-container">
                        <img 
                            src={displayedImg.src}
                            alt={displayedImg.alt}
                            >
                        </img>
                        <ImageControlDots 
                            images={images}
                            switchImg={switchImg}
                            displayedImg={displayedImg}
                            />
                    </div>
                    <div className="quick-view-text-container">
                        <h1 className="product-name">{name}</h1>
                        <p className="product-price">£{price}.00</p>
                        <AddToCart />
                        <button
                            onClick={getProductPage}
                            className="more-info-btn"
                            >View More Details
                        </button> 
                    </div>
                </div>  
            </>)
}