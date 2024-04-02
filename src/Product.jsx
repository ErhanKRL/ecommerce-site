import { Link } from 'react-router-dom';
import { useFavourites } from './FavoritesContext';
import heartRegular from './assets/heart-regular.svg';
import heartSolid from './assets/heart-solid.svg';

export const Product = ({ product }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavourites();
  const toggleFavorite = (event, productId) => {
    event.preventDefault(); 
    event.stopPropagation();
    if (isFavorite(productId)) {
      removeFromFavorites(productId);
    } else {
      addToFavorites(productId);
    }
  };

  return (
    <li className="products-item" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <div className="product">
          <div className='product-image--container'>
            <img className="product-image" src={product.image} alt={product.title} />
            <div className='product-image--favourite-container'>
              {isFavorite(product.id) ? (
                <img src={heartSolid} alt="Favorited" onClick={(event) => toggleFavorite(event, product.id)}/>
                ) : (
                <img src={heartRegular} alt="Not Favorited" onClick={(event) => toggleFavorite(event, product.id)}/>
              )}
            </div>
          </div>
          <span className="product-title">{product.title}</span>
        </div>
      </Link>
    </li>
  );
};
