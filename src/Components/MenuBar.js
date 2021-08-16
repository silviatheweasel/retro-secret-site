import { NavLink } from "react-router-dom";

export const MenuBar = ({
                            handleMenuClick, 
                            currentCategory, 
                            categories,
                            setShowCart,
                            productsInCart,
                            openCart
                        }) => {
    
    return (<>
                <div 
                    className={window.screen.width <= 600 ? "mobile-menu mobile-hidden" : "desktop-menu"}
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
                        >{productsInCart.length}
                    </button>
                    <ul className="menu-list">
                        <li
                            className="menu-item" 
                            key="home"  
                            onClick={handleMenuClick}
                            style={{
                                    color: currentCategory === "all" ? "#9E8765" : "black"
                                    }}
                            >
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        {categories.map(
                            (category, i) => (
                                <li 
                                    key={"category" + i}
                                    className="menu-item" 
                                    onClick={handleMenuClick}
                                    style={{color: currentCategory === category.toLowerCase() ? "#9E8765" : "black"}}
                                >
                                    <NavLink to={"/" + category.toLowerCase()}>
                                        {category}
                                    </NavLink>
                                </li>))}
                    </ul>
                </div>
            </>)
}