import React, { useState, useEffect } from 'react';
import { useFavourites } from './FavoritesContext';
import { ProductsList } from './ProductsList';
import { Link } from 'react-router-dom';

export const FavoritesController= () => {
  const { favorites } = useFavourites();
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      const fetchedProducts = await Promise.all(
        favorites.map(async (productId) => {
          const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
          if (!response.ok) {
            throw new Error();
          }
          return response.json();
        })
      );
      setFavoriteProducts(fetchedProducts);
    };

    fetchFavoriteProducts();
  }, [favorites]);

  return (
    <div>
      <div className="title-container">
                  <h1 className="title-container--title">Favorites</h1>
                  <div className="nav">
                    <ul>
                      <li>
                        <Link to="/">Products</Link>
                      </li>
                      <li>
                        <Link to="/favorites">Favorites</Link>
                      </li>
                    </ul>
                  </div>
                </div>
        <ProductsList products={favoriteProducts}/>
    </div>
  );
};
