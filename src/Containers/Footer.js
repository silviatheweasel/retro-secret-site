import { Link } from "react-router-dom";
import jsonData from "../utilities/siteStaticContent.json";

export const Footer = () => {
    const localData = JSON.parse(JSON.stringify(jsonData));
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-left">
                        <h2>Quick Links</h2>
                        <ul className="quick-link-list">
                            {localData.map(dataEntry => (
                                <li onClick={() => window.scrollTo(0, 0)}>
                                    <Link to={"/info/" + dataEntry.link}>
                                        {dataEntry.title}
                                    </Link>
                                </li>))}
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