import { MenuBar } from "../Components/MenuBar";
import { Link } from "react-router-dom";

export const Header = ({ 
                         categories, 
                         setShowCart, 
                         productsInCart, 
                         isMobileMenuOpen,
                         toggleMobileMenu,
                         openCart,
                         handleMenuClick
                        }) => {
    

    return (
        <header className="site-header">
            <h1 
                className="site-title"
                id="site-title"
                style={{
                    display: isMobileMenuOpen ? "none" : "block"
                }}
            >
                <Link 
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    RETRO SECRETS
                </Link>
            </h1>
            <button 
                className="burger-nav-btn"
                onClick={toggleMobileMenu} 
            >
                <div 
                    className="burger-nav-icon"
                    id="burger-nav-icon"
                >
                </div>
            </button>
            <nav className="nav-bar">
            <MenuBar 
                categories={categories}
                setShowCart={setShowCart}
                productsInCart={productsInCart}
                isMobileMenuOpen={isMobileMenuOpen}
                openCart={openCart}
                handleMenuClick={handleMenuClick}
            />
            </nav>
        </header>)
}