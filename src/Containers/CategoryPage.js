import { ProductGalary } from "./ProductGalary"

export const CategoryPage = ({ currentCategory, products, handleProductClick }) => {
    const header = currentCategory[0].toUpperCase() + currentCategory.substring(1)

    return (
        <main>
            <h1>{header}</h1>
            <ProductGalary 
                products={products}
                handleProductClick={handleProductClick}
                />
        </main>

    )

}