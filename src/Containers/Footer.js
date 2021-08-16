import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-left">
                        <h2>Quick Links</h2>
                        <ul className="quick-link-list">
                            <li>
                                <Link to="/info/shipping_info">
                                    SHIPPING INFO
                                </Link>
                            </li>
                            <li>
                                <Link to="/info/return_policy">
                                    RETURN AND EXCHANGE POLICY
                                </Link>
                            </li>
                            <li>
                                <Link to="/info/health_info">
                                    OUR PRODUCTS AND YOUR HEALTH
                                </Link>
                            </li>
                            <li>
                                <Link to="/info/packaging">
                                    OUR PACKAGING
                                </Link>
                            </li>
                            <li>
                                <Link to="/info/care_instructions">
                                    CARE INSTRUCTIONS
                                </Link>
                            </li>
                            <li>
                                <Link to="/info/about">
                                    ABOUT US
                                </Link>
                            </li>
                            <li>
                                <Link to="/info/contact">
                                CONTACT US
                                </Link>
                            </li>
                        </ul>
                </div>
                <div className="footer-right">
                        <p>Subscribe to learn about the latest arrivals and get exclusive offers! </p>
                        <form>
                        <input
                            type="email"
                            name="email"
                            className="email-input"
                            placeholder="Enter your email here*"
                            required
                        ></input>
                        <button className="subscribe-btn">
                            Subscribe
                        </button>
                        </form>
                </div>
            </div>
            <p>© {new Date().getFullYear()} by Retro Secrets</p>
        </footer>
    )
}