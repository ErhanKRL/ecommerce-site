
import React, { createContext, useState, useContext } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (productId) => {
    if (!favorites.includes(productId)) {
      setFavorites([...favorites, productId]);
    }
  };

  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter(id => id !== productId));
  };

  const isFavorite = (productId) => {
    return favorites.includes(productId);
  };

  return (
    <FavouritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
