import { useFavourites } from './FavoritesContext';
import heartRegular from './assets/heart-regular.svg';
import heartSolid from './assets/heart-solid.svg';

export const ProductDetail = ({ product }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavourites();

  const toggleFavorite = (productId) => {
    if (isFavorite(productId)) {
      removeFromFavorites(productId);
    } else {
      addToFavorites(productId);
    }
  };

  return (
    <>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div className='product-image--favourite-container'>
              {isFavorite(product.id) ? (
                <img src={heartSolid} alt="Favorited" onClick={() => toggleFavorite(product.id)}/>
                ) : (
                <img src={heartRegular} alt="Not Favorited" onClick={() => toggleFavorite(product.id)}/>
              )}
            </div>
      <img src={isFavorite(product.id) ? heartSolid : heartRegular} alt="Heart Icon" onClick={() => toggleFavorite(product.id)} />
    </>
  );
};
