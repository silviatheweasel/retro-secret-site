import { AddToCart } from "../Components/AddToCart";
import { useState } from "react";

export const QuickViewPage = ({currentProduct: {
                                                    images, 
                                                    name, 
                                                    price, 
                                                    main_image 
                                                }}) => {     
    const [displayedImg, setDisplayedImg] = useState(main_image);  
    const imageControl = () => {

    }                                          
    return (<div>
                <div>
                    <img 
                        src={displayedImg.src}
                        alt={displayedImg.alt}
                        >
                    </img>
                </div>
                <div>
                    
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>£{price}.00</p>
            </div>
            <AddToCart />     
    </div>)
}