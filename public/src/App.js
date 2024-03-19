import { useState } from 'react';
import products from './fake-data/all-products';
import categories from './fake-data/all-categories';
import { CategoriesList } from './CategoriesList';
import { ProductsList } from './ProductsList';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const filteredProducts = activeCategory ? products.filter(product => product.category.includes(activeCategory.split(':')[1].trim())) : products;

  return (
    <div className="App">
      <h1>Products</h1>
      <CategoriesList categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
      <ProductsList products={filteredProducts} />
    </div>
  );
}

export default App;
