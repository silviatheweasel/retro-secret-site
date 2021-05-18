import { ProductOverview } from "../Components/ProductOverview/ProductOverview";
import React from "react";

export const ProductGalary = React.memo(({ currentCategory, products, handleProductClick }) => {
    return (
        <div 
            className="product-galary"
            style={{backgroundColor: currentCategory === null ? "white" : "#F2F1F0"}}
            >
              {products.map((product, i) => (
                <ProductOverview
                    key={"product" + i}
                    mainImg={product.main_image}
                    name={product.name}
                    price={product.price}
                    secondaryImg={product.secondary_image}
                    handleProductClick={handleProductClick}
                />
                ))}
        </div>
    )
})