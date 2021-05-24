import { ProductDetails } from "../Components/ProductDetails/ProductDetails";

export const ProductPage = ({ currentProduct, getCategoryPage, handleSiteLogoClick, navigateProducts, products }) => {
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
                    <li 
                        className="breadcrumb-prev"
                        onClick={getCategoryPage}
                        >{categoryName}</li>
                    <li className="breadcrumb-current">{currentProduct.name}</li>
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
            <ProductDetails 
                currentProduct={currentProduct} 
            />
            <div className="care-instruction-container">
                <h2 className="care-title">Care Instructions</h2>
                <p className="care-text">Do not wear during swims or showers, and the jewellery must be removed before bed and before exercise.</p>
            </div>
        </div>
    )
}