import { ProductGalary } from "../ProductGalary";
import heroImg from "./hero-img.jpg";

const Home = ({     
                hideQuickViewPage, 
                showQuickViewPage, 
                products, 
                handleProductClick, 
                currentCategory, 
                currentProduct,
                getProductPage,
                addItemToCart,
                handleQuantityInputChange,
                quantityInCart
            }) => {
                
    return (<>
                <div className="hero">
                    <img 
                        src={heroImg}
                        alt="girl wearing red earrings"
                        className="hero-image"
                    ></img>
                    <div className="hero-text">
                        <h1 className="hero-title">RETRO SECRETS</h1>
                        <p className="hero-subtitle">vintage inspired jewellery</p>
                    </div>
                </div>
                <div className="site-intro">
                    <h2 className="intro-heading">OUR COLLECTION</h2>
                    <p className="intro-text">Our vintage-inspired collection of earrings, bracelets, rings, and necklaces is bold yet fitting, nostalgic yet timeless, mystic and enchanting. It is for you, the dancing queen, the rebel girl, the fashion guru, the office lady to step up your accessory game and become the envy of all.  </p>
                </div>
                <div className="galary-container">
                    <ProductGalary 
                        products={products}
                        currentCategory={currentCategory}
                        handleProductClick={handleProductClick}   
                        showQuickViewPage={showQuickViewPage}  
                        hideQuickViewPage={hideQuickViewPage}  
                        currentProduct={currentProduct}  
                        getProductPage={getProductPage}
                        addItemToCart={addItemToCart}
                        handleQuantityInputChange={handleQuantityInputChange}
                        quantityInCart={quantityInCart}       
                        />
                </div>
            </>)
}

export default Home;