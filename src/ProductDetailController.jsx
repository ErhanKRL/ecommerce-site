// ProductDetailController.js
import  { useState, useEffect } from 'react';
import { ProductDetail } from './ProductDetail';
import { useParams } from 'react-router-dom';

export const ProductDetailController = () => {
  const Loading = () => <div>Loading...</div>;
  const Error = () => <div>Error fetching data.</div>;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const fetchProductDetail = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && <ProductDetail product={product} />}
    </div>
  );
};
