import { ProductOverview } from "../Components/ProductOverview/ProductOverview";
import React, { useEffect } from "react";
import { QuickViewPage } from "./QuickViewPage";
import { useParams } from "react-router-dom";

export const ProductGalary = React.memo(({ 
                                            hideQuickViewPage, 
                                            showQuickViewPage, 
                                            currentCategory, 
                                            products, 
                                            handleProductClick,
                                            currentProduct,
                                            getProductPage,
                                            addItemToCart,
                                            handleQuantityInputChange,
                                            quantityInCart
                                        }) => {
    const { categoryName } = useParams();
    const currentProducts = categoryName === undefined ? products : products.filter(product => product.category === categoryName);
    
    return (
        <div 
            className="product-galary"
            style={{backgroundColor: currentCategory === null | currentCategory === "all" ? "white" : "#F2F1F0"}}
            >
              {currentProducts.map((product, i) => (
                <ProductOverview
                    key={"product" + i}
                    mainImg={product.main_image}
                    name={product.name}
                    price={product.price}
                    secondaryImg={product.secondary_image}
                    handleProductClick={handleProductClick}
                    currentCategory={currentCategory}
                />
                ))}
                {showQuickViewPage && 
                <div className="quick-view-wrapper">
                    <div className="quick-view-container">
                        <button 
                            onClick={hideQuickViewPage}
                            className="close-btn"
                            >&times;
                        </button>
                        <QuickViewPage 
                            currentProduct={currentProduct}
                            getProductPage={getProductPage}
                            addItemToCart={addItemToCart}
                            handleQuantityInputChange={handleQuantityInputChange} 
                            quantityInCart={quantityInCart}
                        />
                    </div>
                </div>
                }
        </div>
    )
})