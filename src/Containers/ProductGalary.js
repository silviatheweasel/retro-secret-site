import { ProductOverview } from "../Components/ProductOverview/ProductOverview";
import React from "react";
import { QuickViewPage } from "./QuickViewPage";

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
    return (
        <div 
            className="product-galary"
            style={{backgroundColor: currentCategory === null | currentCategory === "all" ? "white" : "#F2F1F0"}}
            >
              {products.map((product, i) => (
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