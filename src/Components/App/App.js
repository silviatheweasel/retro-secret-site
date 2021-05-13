import './App.css';
import Home from "../Home/Home.js";
import { getProductData } from "../../utilities/getProductData";
import { useState, useEffect } from "react";

function App() {
  const categories = [ "Home", "Necklaces", "Bracelets", "Rings", "Earrings"];

  const [products, setProducts] = useState(null);
  useEffect(() => {
      getProductData().then(
          (resolvedData) => setProducts(resolvedData)
      )
  }, []);


  return (
    <div className="App">
      <header>
        <h2>RETRO SECRETS</h2>
        <nav>
          <ul>
            {categories.map((category, i) => (<li key={"category" + i}>{category}</li>))}
          </ul>
        </nav>
      </header>
      <main>
        <Home products={products} />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;
