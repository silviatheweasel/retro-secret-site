import { ProductDetails } from "../Components/ProductDetails/ProductDetails";

export const ProductPage = ({ currentProduct }) => {
    const categoryName = currentProduct.category[0].toUpperCase() + currentProduct.category.substring(1);
    return (
        <div className="product-page">
            <nav className="product-page-nav">
                <ul className="breadcrumb-menu">
                    <li className="breadcrumb-prev">Home</li>
                    <li className="breadcrumb-prev">{categoryName}</li>
                    <li className="breadcrumb-current">{currentProduct.name}</li>
                </ul>
                <ul className="product-navigation">
                    <li className="prev-btn">Prev</li>
                    <li className="next-btn">Next</li>
                </ul>
            </nav>
                <ProductDetails 
                    currentProduct={currentProduct} 
                />
        </div>
    )
}