import { MenuBar } from "../Components/MenuBar";
import { Link } from "react-router-dom";

export const Header = ({ handleMenuClick, 
                         currentCategory, 
                         categories, 
                         setShowCart, 
                         productsInCart, 
                         isMobileMenuOpen, 
                         openCart}) => {
    

    return (
        <header className="site-header">
            <h1 
                className="site-title"
                id="site-title"
            >
                <Link to="/">
                    RETRO SECRETS
                </Link>
            </h1>
            <button 
                className="burger-nav-btn"
                // onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            >
                <div 
                    className="burger-nav-icon"
                    id="burger-nav-icon"
                >
                </div>
            </button>
            <nav className="nav-bar">
            <MenuBar
                handleMenuClick={handleMenuClick} 
                currentCategory={currentCategory}  
                categories={categories}
                setShowCart={setShowCart}
                productsInCart={productsInCart}
                isMobileMenuOpen={isMobileMenuOpen}
                openCart={openCart}
            />
            </nav>
        </header>)
}