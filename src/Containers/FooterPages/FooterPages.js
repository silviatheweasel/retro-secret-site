import brandLogo from "./brand-logo.png";
import jsonData from "../../utilities/siteStaticContent.json";
import { useParams } from "react-router-dom";

export const FooterPages = () => {
    const { pageTitle } = useParams();

    const localData = JSON.parse(JSON.stringify(jsonData));
    const filteredData = localData.filter(data => data.link === pageTitle);

    if (filteredData.length > 0 ) {
        const { title, content } = filteredData[0];
        return (<div className="static-page-container">
                    <img 
                        src={brandLogo}
                        alt="Retro Secrets logo"
                        className="brand-logo not-visible"
                        ></img>
                    <h1>{title}</h1>
                    <div className="paragraphs">
                        {content.map((paragraph, i) => (<p key={"paragraph" + i}>{paragraph}</p>))}
                    </div>
                </div>)
    }
    return (<></>)
}