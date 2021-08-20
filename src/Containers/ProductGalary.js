import { ProductOverview } from "../Components/ProductOverview/ProductOverview";
import { QuickViewPage } from "./QuickViewPage";
import { useParams } from "react-router-dom";
import React from "react";

export const ProductGalary = React.memo(({ 
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
    const currentProducts = categoryName === undefined ? products : products.filter(product => product.category === categoryName);
    const currentProduct = currentProducts.filter(product => product.name === clickedProduct)[0];
    
    return (
        <div 
            className="product-galary"
            style={{backgroundColor: categoryName ===  undefined ? "white" : "#F2F1F0"}}
            >
              {currentProducts.map((product, i) => (
                <ProductOverview
                    key={"product" + i}
                    mainImg={product.main_image}
                    name={product.name}
                    price={product.price}
                    secondaryImg={product.secondary_image}
                    handleProductClick={handleProductClick}
                    // currentProducts={currentProducts}
                />
                ))}
                {showQuickViewPage && 
                <div className="quick-view-wrapper">
                    <div className="quick-view-container">
                        <button 
                            className="close-btn"
                            onClick={hideQuickViewPage}
                            >&times;
                        </button>
                        <QuickViewPage 
                            // currentProduct={currentProduct}

                            // getProductPage={getProductPage}
                            addItemToCart={addItemToCart}
                            handleQuantityInputChange={handleQuantityInputChange} 
                            quantityInCart={quantityInCart}
                            clickedProduct={clickedProduct}
                            currentProduct={currentProduct}
                        />
                    </div>
                </div>
                }
        </div>
    )
})