import { AddToCart } from "../Components/AddToCart";
import { ImageControlDots } from "../Components/ImageControlDots";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const QuickViewPage = ({  
                                addItemToCart,
                                currentProduct,
                                handleQuantityInputChange,
                                quantityInCart
                            }) => {    

    
    const {
            images, 
            name, 
            price, 
            main_image, 
            category 
        } = currentProduct;

    const [displayedImg, setDisplayedImg] = useState(main_image); 

    //re-renders the displayed image when the current product changes
    useEffect(() => setDisplayedImg(currentProduct.main_image), [currentProduct]); 

    const switchImg = ({target}) => {
        setDisplayedImg({
                        src: target.id,
                        alt: ""
                        });
    }

    const showNextImg = () => {
        for (let i = 0; i < images.length; i++) {
            if (displayedImg.src === images[i].src) {
                if (i<=images.length -2) {
                    setDisplayedImg(images[i+1]);
                } else {
                    setDisplayedImg(images[0]);
                }
            }
        }
    }

    const showPrevImage = () => {
        for (let i = 0; i < images.length; i++) {
            if (displayedImg.src === images[i].src) {
                if (i>=1) {
                    setDisplayedImg(images[i-1]);
                } else {
                    setDisplayedImg(images[images.length-1]);
                }
            }
        }
    }

    return (<>
                <div 
                    className="quick-view-content"
                >
                    <div className="quick-view-image-container">
                        <button
                            onClick={showPrevImage}
                            className="prev-btn"
                        ><i className="fas fa-chevron-left"></i></button>
                        <img 
                            src={displayedImg.src}
                            alt={displayedImg.alt}
                            >
                        </img>
                        <button
                            onClick={showNextImg}
                            className="next-btn"
                        ><i className="fas fa-chevron-right"></i></button>
                        <ImageControlDots 
                            images={images}
                            switchImg={switchImg}
                            displayedImg={displayedImg}
                            />
                    </div>
                    <div className="quick-view-text-container">
                        <h1 className="product-name">{name}</h1>
                        <p className="product-price">£{price}.00</p>
                        <AddToCart 
                            addItemToCart={addItemToCart}
                            handleQuantityInputChange={handleQuantityInputChange}
                            quantityInCart={quantityInCart}
                            currentProduct={currentProduct}
                        />
                        <button
                            className="more-info-btn"
                        >
                            <Link to={"/products/" + category.toLowerCase().replaceAll(" ", "_") + "/" + name.toLowerCase().replaceAll(" ", "_")}>
                            View More Details
                            </Link>
                        </button> 
                    </div>
                </div>  
            </>)
}