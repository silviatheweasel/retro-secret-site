import { useState } from "react";

export const ProductDetails = () => {
    // const [displayImg, setDisplayImg] = useState(main_image);
    // console.log(props);
    // const handleClick = ({target}) => {
    //     setDisplayImg(target);
    // }

    return (
        <main>
            <div className="thumbnails">
                {/* {images.map(image => <img 
                                        src={image.src} 
                                        alt={image.alt}
                                        onClick={handleClick}
                                        ></img>)} */}
            </div>
            <div className="large-product-image">
                {/* <img src={displayImg.src} alt={displayImg.alt}></img> */}
            </div>

        </main>
    )
}