import { ProductDetails } from "../Components/ProductDetails/ProductDetails";

export const ProductPage = ({ currentProduct }) => {
    return (
        <div>
            <nav>

            </nav>

            <button>Prev</button>
            <button>Next</button>
            <main>
                <ProductDetails 
                    currentProduct={currentProduct} 
                />
            </main>
        </div>
    )
}