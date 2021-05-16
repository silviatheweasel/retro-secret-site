import { ProductGalary } from "../ProductGalary";


const Home = ({ products, handleProductClick }) => {

    return (<div>
            <div className="hero">
                <img 
                    src="https://static.wixstatic.com/media/01a936_d977a5241bb844e19ab90ff30a9fb078~mv2.jpg/v1/fill/w_1280,h_744,al_c,q_90/01a936_d977a5241bb844e19ab90ff30a9fb078~mv2.webp"
                    alt="girl wearing red earrings"
                ></img>
                <h1>RETRO SECRETS</h1>
                <p>vintage inspired  jewellery</p>
            </div>
            <div className="intro">
                <h2>OUR COLLECTION</h2>
                <p>Our vintage-inspired collection of earrings, bracelets, rings, and necklaces is bold yet fitting, nostalgic yet timeless, mystic and enchanting. It is for you, the dancing queen, the rebel girl, the fashion guru, the office lady to step up your accessory game and become the envy of all.  </p>
            </div>
            <ProductGalary 
                products={products}
                handleProductClick={handleProductClick} />
        </div>)
}

export default Home;