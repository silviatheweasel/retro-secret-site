import { ProductGalary } from "./ProductGalary";
import React from "react";

export const CategoryPage = React.memo(({ currentCategory, products, handleProductClick }) => {
    const header = currentCategory[0].toUpperCase() + currentCategory.substring(1)

    return (<div className="category-page">
                <h1 className="category-title">{header}</h1>
                <ProductGalary 
                    products={products}
                    handleProductClick={handleProductClick}
                    />
             </div>)
})