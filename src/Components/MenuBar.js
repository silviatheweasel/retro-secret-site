import { NavLink, Link, useLocation } from "react-router-dom";

export const MenuBar = ({
                            categories,
                            setShowCart,
                            productsInCart,
                            openCart,
                            isMobileMenuOpen,
                            handleMenuClick
                        }) => {

    const location = useLocation();
    
    return (<>
                <div 
                    className={window.screen.width <= 600 ? "mobile-menu mobile-hidden" : "desktop-menu"}
                    style={{
                        display: window.screen.width > 600 ? "flex" : (isMobileMenuOpen ? "block" : "none") 
                    }}
                    id="menu"
                >
                    <button
                        className="nav-bar-cart-btn desktop"
                        id="nav-bar-cart-btn"
                        onClick={() => {
                            if (window.screen.width <= 600) {
                                openCart();
                                
                            } else {
                                setShowCart(true);
                            }
                        }}
                    >
                        <Link 
                            to={window.screen.width <= 600 ? "/cart" : location.pathname}
                            className="link"
                            style={{color: "white"}}
                        >
                            {productsInCart.length}
                        </Link>
                    </button>
                    <ul className="menu-list">
                        <li
                            className="menu-item" 
                            key="home"  
                            onClick={handleMenuClick}
                        >
                            <NavLink 
                                exact to="/"
                                className="nav-link"
                            >
                                Home
                            </NavLink>
                        </li>
                        {categories.map(
                            (category, i) => (
                                <li 
                                    key={"category" + i}
                                    className="menu-item" 
                                    onClick={handleMenuClick}
                                >
                                    <NavLink 
                                        to={"/" + category.toLowerCase()}
                                        className="nav-link"
                                    >
                                        {category}
                                    </NavLink>
                                </li>)
                            )
                        }
                    </ul>
                </div>
            </>)
}