import { ProductGalary } from "../ProductGalary";


const Home = ({ products, handleProductClick }) => {

    return (<div className="homepage">
                <div className="hero">
                    <img 
                        src="https://static.wixstatic.com/media/01a936_d977a5241bb844e19ab90ff30a9fb078~mv2.jpg/v1/fill/w_1280,h_744,al_c,q_90/01a936_d977a5241bb844e19ab90ff30a9fb078~mv2.webp"
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
                <ProductGalary 
                    products={products}
                    handleProductClick={handleProductClick} 
                    />
            </div>)
}

export default Home;