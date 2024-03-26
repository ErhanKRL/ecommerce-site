import { useState, useEffect } from 'react';
import { CategoriesList } from './CategoriesList';

export const CategoriesController = ({ setActiveCategory, activeCategory }) => {
  const Loading = () => <div>Loading...</div>;
  const Error = () => <div>Error fetching data.</div>;

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      console.log('fetching categories...');
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCategories(); // Call fetchCategories inside the useEffect callback
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && <CategoriesList categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />}
    </div>
  );
};
