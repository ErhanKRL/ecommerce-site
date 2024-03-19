import {Product} from './Product'

export const ProductsList = ({ products }) => (
    <ul className="products">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );