import { ProductDetails } from "../Components/ProductDetails";

export const ProductPage = ({ 
                                currentProduct, 
                                getCategoryPage, 
                                handleSiteLogoClick, 
                                navigateProducts, 
                                products,
                                currentCategory, 
                                addItemToCart,
                                handleQuantityInputChange,
                                quantityInCart

                            }) => {
    const categoryName = currentProduct.category[0].toUpperCase() + currentProduct.category.substring(1);
    const index = products.findIndex(product => product.name === currentProduct.name);
    return (
        <div className="product-page">
            <nav className="product-page-nav">
                <ul className="breadcrumb-menu">
                    <li 
                        className="breadcrumb-prev"
                        onClick={handleSiteLogoClick}
                        >Home</li>
                    {currentCategory !== "all" && <li 
                        className="breadcrumb-prev"
                        onClick={getCategoryPage}
                        >{categoryName}
                    </li>}
                    <li 
                        className="breadcrumb-current"
                        >{currentProduct.name}
                    </li>
                </ul>
                <ul className="product-navigation">
                    <li 
                        id="prev-btn"
                        onClick={navigateProducts}
                        style={{
                                color: index === 0 ? "gray" : "black", 
                                cursor: index === 0 ? "default" : "pointer"
                                }}
                        >Prev</li>
                    <li 
                        id="next-btn"
                        onClick={navigateProducts}
                        style={{
                                color: index === products.length -1 ? "gray" : "black", 
                                cursor: index === products.length -1 ? "default" : "pointer"
                                }}
                        >Next</li>
                </ul>
            </nav>
            <nav 
                className="product-mobile-nav"
                style={{display: window.screen.width <= 600? "block" : "none"}}
                >
                {currentCategory === "all" ? 
                <button
                    onClick={handleSiteLogoClick}
                    className="back-btn"
                    >Back to Home
                </button> : <button
                                onClick={getCategoryPage}
                                className="back-btn"
                                >Back to {categoryName}
                            </button>}
            </nav>
            <ProductDetails 
                currentProduct={currentProduct} 
                addItemToCart={addItemToCart}
                handleQuantityInputChange={handleQuantityInputChange}
                quantityInCart={quantityInCart}
            />
            <div className="care-instruction-container">
                <h2 className="care-title">Care Instructions</h2>
                <p className="care-text">Do not wear during swims or showers, and the jewellery must be removed before bed and before exercise.</p>
            </div>
        </div>
    )
}