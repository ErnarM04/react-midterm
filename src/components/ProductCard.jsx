import "./ProductCard.css";

function ProductCard(product) {
    return (
        <div className="card">
            <img src={product.image} alt={product.title}/>
            <h3 className="title">{product.title}</h3>
            <h4 className="price">{product.price}$</h4>
            <p className="description">{product.description}</p>
        </div>
    );
}

export default ProductCard;