import { ProductGalary } from "./ProductGalary"

export const CategoryPage = ({ currentCategory, products, handleProductClick }) => {
    const header = currentCategory[0].toUpperCase() + currentCategory.substring(1)

    return (
        <main className="category-page">
            <h1>{header}</h1>
            <ProductGalary 
                products={products}
                handleProductClick={handleProductClick}
                />
        </main>

    )

}