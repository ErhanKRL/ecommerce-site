
export const Product = ({ product }) => (
    <li className="products-item">
        <div className="product">
            <img className="product-image" src={product.image} alt={product.title} />
            <span class="product-title">{product.title}</span>
        </div>
    </li>
    
);