import { ProductOverview } from "../Components/ProductOverview/ProductOverview";

export const ProductGalary = ({ products, handleProductClick }) => {
    return (
        <div className="product-galary">
              {products.map((product, i) => (
                <ProductOverview
                    key={"product" + i}
                    mainImg={product.main_image}
                    name={product.name}
                    price={product.price}
                    secondaryImg={product.secondary_image}
                    handleProductClick={handleProductClick}
                />
                ))}
        </div>
    )
}