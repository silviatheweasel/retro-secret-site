import { ProductGalary } from "./ProductGalary";
import React from "react";

export const CategoryPage = React.memo(({ currentCategory, products, handleProductClick }) => {
    const header = currentCategory[0].toUpperCase() + currentCategory.substring(1)

    return (<>
            <h1>{header}</h1>
            <ProductGalary 
                products={products}
                handleProductClick={handleProductClick}
                />
             </>)
})