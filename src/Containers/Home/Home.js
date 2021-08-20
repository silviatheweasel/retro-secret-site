import { ProductGalary } from "../ProductGalary";
import heroImg from "./hero-img.jpg";

const Home = ({     
                products,
                handleProductClick,
                showQuickViewPage,
                hideQuickViewPage,
                addItemToCart,
                handleQuantityInputChange,
                quantityInCart, 
                clickedProduct
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
                        handleProductClick={handleProductClick} 
                        showQuickViewPage={showQuickViewPage}
                        hideQuickViewPage={hideQuickViewPage}
                        clickedProduct={clickedProduct}
                        addItemToCart={addItemToCart}
                        handleQuantityInputChange={handleQuantityInputChange}
                        quantityInCart={quantityInCart}    
                    />
                </div>
            </>)
}

export default Home;