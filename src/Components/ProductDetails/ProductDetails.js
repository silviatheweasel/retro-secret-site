import { useState } from "react";

export const ProductDetails = ({images, name, price, description}) => {
    

    return (
        <main>
            <div className="thumbnails">
                {images.map(imageSrc => <img src={imageSrc}></img>)}

            </div>

        </main>
    )
}