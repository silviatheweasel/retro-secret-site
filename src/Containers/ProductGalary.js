import { ProductOverview } from "../Components/ProductOverview/ProductOverview";
import React from "react";
import { QuickViewPage } from "./QuickViewPage";

export const ProductGalary = React.memo(({ 
                                            hideQuickViewPage, 
                                            showQuickViewPage, 
                                            currentCategory, 
                                            products, 
                                            handleProductClick,
                                            currentProduct 
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
                <div>
                    <button 
                        onClick={hideQuickViewPage}
                        >&times;
                    </button>
                    <QuickViewPage 
                        currentProduct={currentProduct}
                    />
                </div>
                }
        </div>
    )
})