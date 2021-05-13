export const ProductOverview = ({ mainImg, name, price }) => {
    return (
        <div className = "product-overview-container">
            <img src={mainImg}></img>
            <h3>{name}</h3>
            <p>£{price}.00</p>

        </div>
    )
}