import { ProductGalary } from "./ProductGalary";
import { useParams } from "react-router-dom";
import React from "react";

export const CategoryPage = React.memo(({ 
                                            hideQuickViewPage, 
                                            showQuickViewPage, 
                                            currentCategory, 
                                            products, 
                                            handleProductClick, 
                                            currentProduct,
                                            getProductPage,
                                            addItemToCart,
                                            quantityInCart,
                                            handleQuantityInputChange,
                                        }) => {
                                            
    const { categoryName } = useParams();

    return (<div className="category-page">
                <h1 className="category-title">{categoryName[0].toUpperCase() + categoryName.slice(1, categoryName.length)}</h1>
                <ProductGalary 
                    products={products}
                    handleProductClick={handleProductClick}
                    showQuickViewPage={showQuickViewPage}
                    hideQuickViewPage={hideQuickViewPage}
                    currentProduct={currentProduct} 
                    getProductPage={getProductPage}
                    addItemToCart={addItemToCart}
                    quantityInCart={quantityInCart} 
                    handleQuantityInputChange={handleQuantityInputChange}
                    />
             </div>)
})