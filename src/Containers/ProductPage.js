import { ProductDetails } from "../Components/ProductDetails";
import { useParams, Link } from "react-router-dom";

export const ProductPage = ({ 
                                products,
                                addItemToCart,
                                handleQuantityInputChange,
                                quantityInCart
                            }) => {

    let { categoryName, productName } = useParams();
    categoryName = categoryName[0].toUpperCase() + categoryName.substring(1);
    productName = productName.replace(/[_|-]\w/g, (match) => match[0] + match[1].toUpperCase()).replaceAll("_", " ");
    productName = productName[0].toUpperCase() + productName.substring(1);

    const categories = ["Necklaces", "Bracelets", "Rings", "Earrings", "All"];

    const currentProducts = categories.includes(categoryName) ? (categoryName === "All" ? products : products.filter(product => product.category === categoryName.toLowerCase())) : null;

    if (!currentProducts) {
        return (<h1>404 Not Found</h1>)
    } else {
        const index = currentProducts.findIndex(product => product.name === productName);
        if (index !== -1) {
            const currentProduct = currentProducts[index];

            const next = index <= currentProducts.length - 2 ? currentProducts[index + 1].name.toLowerCase().replaceAll(" ", "_") : currentProducts[index].name.toLowerCase().replaceAll(" ", "_");
            const prev = index >= 1 ? currentProducts[index - 1].name.toLowerCase().replaceAll(" ", "_") : currentProducts[index].name.toLowerCase().replaceAll(" ", "_");


        return (
            <div className="product-page">
                <nav className="product-page-nav">
                    <ul className="breadcrumb-menu">
                        <li 
                            className="breadcrumb-prev"
                        >
                            <Link
                                className="link"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        {categoryName !== "All" && 
                        <li 
                            className="breadcrumb-prev"
                        >
                            <Link 
                                to={"/" + categoryName.toLowerCase()}
                                className="link"
                            >
                                {categoryName}
                            </Link>
                        </li>}
                        <li 
                            className="breadcrumb-current"
                            >{productName}
                        </li>
                    </ul>
                    <ul className="product-navigation">
                        <li 
                            id="prev-btn"
                        >
                            <Link 
                                to={"/products/" + categoryName.toLowerCase() + "/" + prev}
                                className="link"
                                style={{
                                    color: index === 0 ? "gray" : "black", 
                                    cursor: index === 0 ? "default" : "pointer"
                                    }}
                            >
                                Prev
                            </Link>
                        </li>
                        <li 
                            id="next-btn"
                        >
                            <Link 
                                to={"/products/" + categoryName.toLowerCase() + "/" + next}
                                className="link"
                                style={{
                                    color: index === currentProducts.length -1 ? "gray" : "black", 
                                    cursor: index === currentProducts.length -1 ? "default" : "pointer"
                                    }}
                            >
                                Next
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav 
                    className="product-mobile-nav"
                    style={{display: window.screen.width <= 600? "block" : "none"}}
                >
                    {categoryName === "All" ? 
                    <button
                        className="back-btn"
                    >
                        <Link 
                            to="/"
                            className="link"
                        >
                            Back to Home
                        </Link>
                    </button> : 
                    <button
                        className="back-btn"
                    >
                        <Link 
                            to={"/" + categoryName.toLowerCase()}
                            className="link"
                        >
                            Back to {categoryName}
                        </Link>
                    </button>}
                </nav>
                <ProductDetails 
                    currentProducts={currentProducts}
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
        } else {
            return <h1>404 Not Found</h1>
        }
    }
}
