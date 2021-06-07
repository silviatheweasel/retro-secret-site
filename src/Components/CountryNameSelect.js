import { countries } from "../utilities/countryArray";
import { useState, useEffect } from "react";

export const CountryNameSelect = ({ updateLocation, setShowCountryBox, location }) => {
    const [input, setInput] = useState("United Kingdom");
    const [suggested, setSuggested] = useState(countries);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        const findMatches = () => {
            for (let i = 0; i < countries.length; i ++) {
                if (countries[i].toLowerCase().includes(input)) {
                    setSuggested((prev) => [...prev, countries[i]]);
                }
            }
        }
        findMatches();
        return () => {
            setSuggested([]);
        }
    }, [input]);

    useEffect(() => {
        setInput(location);
    }, [location]);

    return (<form className="country-select-container">
                <h1>Select Destination</h1>
                <button 
                    className="close-btn"
                    onClick={() => setShowCountryBox(false)}
                    >&times;
                </button>
                <p className="country-prompt">Country</p>
                <div 
                    className="country-select-box"
                    >
                    <input 
                        type="text"
                        name="country-name"
                        autoComplete="off"
                        className="country-input"
                        value={input}
                        autoFocus
                        onChange={({target}) => {
                            setShowOptions(true);
                            setInput(target.value);
                        }}
                        onClick={({target}) => {
                            target.focus();
                            target.select();
                        }}
                        >
                    </input>
                    <button 
                        className="toggle-arrow-btn"
                        >
                        <i 
                            className="fas fa-chevron-down"
                            onClick={(event) => {
                                event.preventDefault();
                                setShowOptions(!showOptions);
                            }}
                            >
                        </i>
                    </button>
                </div>  
                {showOptions && <div 
                                    className="suggestion-box"
                                    style={{border: suggested.length > 0 ?  "1px solid rgb(196, 196, 196)" : "none" }}
                                    >
                    {suggested.map((country, i) => <p 
                                                        key={country + i}
                                                        onClick={({target}) => setInput(target.innerHTML)}
                                                        className="suggestion"
                                                        >{country}
                                                    </p>)}
                </div>}             
                <button
                    className="update-btn"
                    id={input}
                    onClick={(event) => {
                        event.preventDefault();
                        updateLocation(event);
                        setShowCountryBox(false);
                    }}
                    >Update
                </button>
            </form>)
}