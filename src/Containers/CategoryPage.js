import { ProductGalary } from "./ProductGalary";
import { useParams } from "react-router-dom";
import React from "react";

export const CategoryPage = React.memo(({ 
                                            products,
                                            handleProductClick,
                                            showQuickViewPage,
                                            hideQuickViewPage,
                                            addItemToCart,
                                            handleQuantityInputChange,
                                            quantityInCart,
                                            clickedProduct
                                        }) => {
                                            
    const { categoryName } = useParams();

    return (<div className="category-page">
                <h1 className="category-title">{categoryName[0].toUpperCase() + categoryName.slice(1, categoryName.length)}</h1>
                <ProductGalary 
                        products={products}
                        handleProductClick={handleProductClick} 
                        showQuickViewPage={showQuickViewPage}
                        hideQuickViewPage={hideQuickViewPage}
                        clickedProduct={clickedProduct}
                        addItemToCart={addItemToCart}
                        handleQuantityInputChange={handleQuantityInputChange}
                        quantityInCart={quantityInCart}  
                    />
             </div>)
})