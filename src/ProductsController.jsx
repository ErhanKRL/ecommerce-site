import { useState, useEffect } from 'react';
import { ProductsList } from './ProductsList';

export const ProductsController = ({ activeCategory }) => {
    const Loading = () => <div>Loading...</div>;
    const Error = () => <div>Error fetching data.</div>;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    const fetchProducts = async () => {
        const url = activeCategory ? `https://fakestoreapi.com/products/category/${activeCategory}` : 'https://fakestoreapi.com/products';
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
      fetchProducts();
    }, [activeCategory]);
    console.log('rendering ProductsController');
    return (
      <div>
        {loading && <Loading />}
        {error && <Error />}
        {!loading && !error && <ProductsList products={products}/>}
      </div>
    );
  };